/** @jsx React.DOM */
(function() {

  var runningQ = false;
  var intervalID;
  var divSize = 5;
  var divBorderWidth = 1;
  var kanyeGrid;

  var randomGameGrid = function (dim){
    var grid = new Array(dim), i;
    for (i = 0; i < dim; i++){
        grid[i] = new Array(dim);
    }
    for (i = 0; i < dim; i++){
        for(var j = 0; j < dim; j++){
          if (Math.random() < 0.5) {
            grid[i][j] = 0;
          } else {
            grid[i][j] = 1;
          }
        }
    }
    return grid;
  };

  var stepGame = function(gameState) {
    var newLiving = Array(),
        newDead = Array(), i, j, k, m;
    for(i = 0; i < gridSize; i++){
        for(j = 0; j < gridSize; j++){
            var currNode = gameState.grid[i][j];
            var livingNeighbors = 0;
            //traverse the 8 cells around the current cell
            for(k = i - 1; k <= i + 1; k ++){
                for(m = j - 1; m <= j + 1; m ++){
                    if((k < 0) || (m < 0) || (k >= gridSize) || (m >= gridSize)){
                        continue;
                    }
                    livingNeighbors += gameState.grid[k][m];
                }
            }
            if(currNode){
                livingNeighbors--;
            }
            //update life of cell
            if (currNode){
                if((livingNeighbors <= 1) || (livingNeighbors > 3)){
                    var deadCords = {yCord: i, xCord: j};
                    newDead.push(deadCords);
                }
            } else{
                if (livingNeighbors == 3) {
                    var lifeCords = {yCord: i, xCord: j};
                    newLiving.push(lifeCords);
                }
            }
        }
    }
    for (i = 0; i < newDead.length; i++) {
        var killMe = newDead[i];
        gameState.grid[killMe.yCord][killMe.xCord] = 0;
    }
    for (i = 0; i < newLiving.length; i++) {
        var giveLife = newLiving[i];
        gameState.grid[giveLife.yCord][giveLife.xCord] = 1;
    }
    return gameState;
  };

  var Cell = React.createClass({
    render: function() {
      var dim = this.props.dim;
      var col = this.props.col;
      var row = this.props.row;
      var leftAlignQ = col === 0 ? true : false;
      var style = {
        width: divSize,
        height: divSize,
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

  var Board = React.createClass({
    startAnimate: function() {
        $("#kanye-music")[0].play();
        var update = function(){
        this.setState(stepGame(this.state));
      }.bind(this);
      intervalId = setInterval(update, 100);
    },

    stopAnimate: function() {
        $("#kanye-music")[0].pause();
        clearInterval(intervalId);
    },

    getInitialState: function () {
      /*
      console.log("getInitialState kanyeGrid = ");
      console.log(kanyeGrid);
      */
      return {grid: kanyeGrid};
    },

    render: function() {
      var a = [];
      for (var row=0; row<gridSize; row++) {
        for (var col=0; col<gridSize; col++) {
          a.push(<Cell
                 dim = {divSize} col = {col} row = {row}
                 color = {this.state.grid[row][col] === 1 ? "black" : "white"}
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
  });

  $.getJSON("images/KanyeWest_4475Web.json", function(data) {
      /*
      for (var i = 0; i < data.length; i++) {
          console.log(data[i]);
      }
      */
      kanyeGrid = [];
      var row;
      for (var i = 0; i < data.length; i++) {
          row = data[i];
          for (var j = 0; j < row.length; j++) {
              row[j] = parseInt(row[j]);
          }
          kanyeGrid.push(row);
      }
      gridSize = data.length;
      //kanyeGrid = randomGameGrid(gridSize);
      /*
      console.log(gridSize);
      console.log(kanyeGrid.length);
      */
      React.renderComponent(<Board />, document.getElementById("grid"));
  });

})()
