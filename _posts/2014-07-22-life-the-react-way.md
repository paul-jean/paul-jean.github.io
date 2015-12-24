---
title: Life the React Way
layout: post
---

During Hacker School I implemented the [Game of Life using React](https://github.com/paul-jean/life/blob/master/implementations/react-div/life-react-div.js). I also implemented it using [vanilla JS](https://github.com/paul-jean/life/blob/master/implementations/js-div/life-js-div-all.js) for comparison. So I wanted to talk a little bit about what I learned …

The Game of Life is a super simple app to write. All you have is a grid of black and white cells. The cell colors are dynamic: they change from step to step according to the colors of their surrounding neighbors. When you run it, the grid is animated, and cool patterns emerge:

{% include figure.html url="../../../images/gol-js-canvas.gif" description="Game of Life" width="100%"%}

To see it running in your browser, go to the GitHub project page [here](http://paul-jean.github.io/life/implementations/js-div/life-js-div.html).

The [JS implementation](https://github.com/paul-jean/life/blob/master/implementations/js-div/life-js-div-all.js) is straightforward. One way to do it is to make each cell a div that is either black or white. Then just loop over the divs on each step and set their colors:

``` javascript
var updateGrid = function(gameState) {
  newGrid();
  var row, col, cellId, rowColDiv;
  for (row = 0; row < gameState.dim; row ++) {
    for (col = 0; col < gameState.dim; col ++) {
      cellId = "r" + row + "c" + col;
      rowColDiv = document.getElementById(cellId);
      if (gameState.grid[row][col].val === 1) {
        rowColDiv.style.backgroundColor = "black";
      } else if (gameState.grid[row][col].val === 0) {
        rowColDiv.style.backgroundColor = "white";
      }
    }
  }
};
```

But notice above that a lot of the cells aren’t changing color from step to step. The stay white or black for many steps.

So ideally you wouldn’t try to update the divs that aren’t changing color. My simple JS implementation does the stupidest thing possible: just blow the grid away and re-add all the divs on every step.

I wrote a [browser extension](https://github.com/paul-jean/dom-viz) that highlights DOM elements when they’re mutated, and naturally it shows every div being changed on each step:

{% include figure.html url="../../../images/gol-js-div-dom-viz.gif" description="DOM Viz browser extension showing mutated DOM elements in the JS implementation of GOL"  width="100%"%}

## Enter React

So how do things change when you use React? (The React app is [here](http://paul-jean.github.io/life/implementations/react-div/life-react-div.html).)

With React you create “Components” and add them to React’s “virtual DOM”.

Here’s the Cell component for each Game of Life cell:

```javascript
var Cell = React.createClass({
  render: function() {
    var dim = this.props.dim;
    var col = this.props.col;
    var row = this.props.row;
    var leftAlignQ = col === 0 ? true : false;
    var style = {
      width: 10,
      height: 10,
      backgroundColor: this.props.color,
      border: "solid gray 1px",
      "float": "left",
      clear: leftAlignQ ? "both" : "none"
    };
    return (
      <div width = {dim} height = {dim} style = {style} >
      </div>
    );
  }
});
```

The `render` method returns the actual DOM element for a cell, which is a div just like before.

Notice the inline HTML right there in the JS file! That’s React’s “JSX” syntax, which it compiles into actual JS code if this header is present at the top of the file:

```javascript
/** @jsx React.DOM */
(function() {
...
```

Here’s the Board component that holds the Cells:

```javascript
var Board = React.createClass({
  startAnimate: function() {
    var update = function(){
      this.setState(stepGame(this.state));
    }.bind(this);
    intervalId = setInterval(update, 100);
  },

  stopAnimate: function() {
    clearInterval(intervalId);
  },

  getInitialState: function () {
    return {grid: randomGameGrid(gridSize)};
  },
  render: function() {
    var a = [];
    for (var row=0; row<50; row++) {
      for (var col=0; col<50; col++) {
        a.push(<Cell
               dim = '10' col = {col} row = {row}
               color = {this.state.grid[row][col].val === 1 ? "black" : "white"}
               />);
      }
    }
    return (
      <div>
        <input id="startButton" type="button" value="start" onClick={this.startAnimate}/>
        <input id="stopButton" type="button" value="stop" onClick={this.stopAnimate}/>
        <div width= {divSize * gridSize}>
          {a}
        </div>
      </div>
    )
  }
```

The Board is initialized with an internal state that is the raw array of 1s and 0s on the board. It contains buttons for starting and stopping the animation. The `startAnimate` method kicks off an animation loop that continually calls the `setState` method, which modifies the grid.

When `setState` is called, React triggers an event listener to call the `render` method on the `Board` and all of its children:

{% include figure.html url="../../../images/react-render-children-vjeux.png" description="React re-renders dirty nodes and all their children (yanked from (1))"   width="100%"%}

So all the `Cell` components within the `Board` get re-rendered on each frame. Notice that the components render in response to a state change. So _the UI updates as a reaction to changes in component state_ (hence the name "React").

Looking closer at the Board’s render method:

```javascript
render: function() {
  var a = [];
  for (var row=0; row<50; row++) {
    for (var col=0; col<50; col++) {
      a.push(<Cell
             dim = '10' col = {col} row = {row}
             color = {this.state.grid[row][col].val === 1 ? "black" : "white"}
             />);
    }
  }
  return (
    <div>
      <input id="startButton" type="button" value="start" onClick={this.startAnimate}/>
      <input id="stopButton" type="button" value="stop" onClick={this.stopAnimate}/>
      <div width= {divSize * gridSize}>
        {a}
      </div>
    </div>
  )
}
```

Notice that on every render, all we’re doing is dumping a bunch of fresh `Cell` components into a fresh `Board` component. It’s just like we did earlier in the vanilla JS implementation.

So isn’t this inefficient? Surprisingly, no! We’re dumping new components into React’s virtual DOM, not the actual DOM like before.

React has a clever algorithm for determining the minimum set of DOM nodes that need to change, based on changes in it’s vDOM. It doesn’t do a full tree comparison (which would be O(n^3)). Rather, it just compares nodes on the same level (which is O(n)):

{% include figure.html url="../../../images/react-diff-levels-vjeux.png" description="React diffs the vDOM only between the same levels, which is much faster than considering nodes that move between levels (yanked from (1))"  width="100%"%}

Also, all components are rendered in a batch once per browser frame. So the DOM is only touched once per frame. So the React version only updates the cells that are actually changing color:

{% include figure.html url="../../../images/gol-react-div-dom-viz.gif" description="With React, only the cells that change color are mutated in the DOM"  width="100%"%}

So React is much more efficient by comparison to vanilla JS:

{% include figure.html url="../../../images/gol-js-vs-react-div.gif" description="React (right) touches the DOM much more selectively than the vanilla JS implementation (left)"  width="100%" %}

## Conclusions

This was a simple demo showing the basic ideas of React, using an app with super simple application logic.

* React maintains a virtual DOM (vDOM)
* The vDOM contains components
* A component has internal state
* When a component’s setState method is called, it is re-rendered along with all of its children
* React has a clever algorithm for efficiently diffing the vDOM
* So you can just dump new components into the vDOM and let React figure out the diffs for you
* React will only touch the DOM once per browser frame, making rendering very efficient

## References

1. "React’s diff algorithm”, Christopher Chedeau (@vjeux) http://calendar.perfplanet.com/2013/diff/

