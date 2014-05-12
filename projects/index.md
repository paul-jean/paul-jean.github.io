---
title: Projects
layout: projects
---

## Hacker School

I was in the Winter 2014 batch of [Hacker School](http://www.hackerschool.com).
I did a number of projects, including front-end Javascript + HTML + CSS,
back-end Javascript in Node.js, and functional programming in Scala and Clojure.

### Game of Life in many Javascript frameworks

At the beginning of the batch I paired with [Jake](https://twitter.com/\_JacobJacob) on a
Javascript implementation of
Conway's Game of Life, as a way to learn Javascript and HTML5 canvas:

{% include figure.html url="../images/gol-js-canvas.gif" description="Game of Life with JS using HTML5 canvas" %}

But our code felt a bit hacky, using global state all over the place. For example, the `draw`
function here calls `exports.game.update()`, which relies entirely on side effects to update the game state:

``` javascript
var draw = function() {
  var update = function(){
    exports.game.update();
    renderGrid(exports.context, exports.game.grid, exports.WIDTH, exports.HEIGHT);
  };
  exports.intervalId = setInterval(update, 100);
};
```

So after doing a code review with [Mary](http://www.twitter.com/maryrosecook) I
[refactored](https://github.com/paul-jean/life/commit/704b10c8618359cc29a6d6a4d4782cef590e3c09)
it into a more functional style to
eliminate as much global state as I could. Instead of `exports.game.update()`, I created a `stepGame`
function that takes the current game state and returns a new one:

``` javascript
var startAnimate = function() {
  var update = function(){
    gameState = stepGame(gameState);
    renderGrid(ctx, gameState, canvas.width, canvas.height);
  };
  intervalId = setInterval(update, 100);
};
```

Then I wondered how you'd implement the same
interface using [D3.js](http://d3js.org/), so [Damian](https://twitter.com/damiankao) and I
[refactored it again](https://github.com/paul-jean/life/commit/1da8eace529bbbd326850ec40a4823cd7a4370d8)
using SVG graphics managed by D3:

{% include figure.html url="../images/gol-d3.gif" description="Game of Life with D3.js"%}

With D3 you treat the
DOM kind of like a database, selecting groups of SVG elements and transformations on
them:

``` javascript
base.render = function() {
  _svg
    .selectAll('g')
    .selectAll('rect')
    .attr('fill', function(d,i) {
        if (d[2]) return 'black';
        else return 'white';
        })
  return base;
}
```

Around that time I heard about Facebook's [React.js](http://facebook.github.io/react/) framework,
and [Thomas](https://twitter.com/thomasABoyt), a Hacker School
alum who knew React, happened to be visiting that week. So I paired with him and
refactored the code
[yet again](https://github.com/paul-jean/life/blob/5ac1698942a782a26a77d9b7556bf894fe0ee25b/life.js)
to use React for managing the SVG elements:

{% include figure.html url="../images/gol-react.gif" description="GOL in React.js (using SVG elements)" %}

Now the GOL grid was a React component (a `Board`),
containing individual `Cell` components. Each step the board is created entirely anew with fresh
cells whose color is determined by the state of the `Board` component:

``` javascript
  var Board = React.createClass({
    ...
    render: function() {
      var a = [];
      for (var row=0; row<50; row++) {
        for (var col=0; col<50; col++) {
          a.push(<Cell
                 dim='10' col={col} row={row}
                 key={row + ',' + col}
                 fill={this.state[[row, col]].val === 1 ? 'black': 'white'}
                 handleCellClicked={this.handleCellClicked}
                 />);
        }
      }
      return (
        <div>
          <input id="startButton" type="button" value="start" onClick={this.handleStart}/>
          <input id="stopButton" type="button" value="stop" onClick={this.handleStop}/>
          <svg>
            {a}
          </svg>
        </div>
      )
    },
    ...
  });
```
