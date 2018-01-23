var board = '090000006\n' + 
            '000960485\n' +
            '000581000\n' +
            '004000000\n' +
            '517200900\n' +
            '602000370\n' +
            '100804020\n' +
            '706000810\n' +
            '300090000';
var parsedBoard;


function parseBoard(){
  // parsedBoard = parseBoard(board);
  var expectedBoard = [
      [0,9,0,0,0,0,0,0,6],
      [0,0,0,9,6,0,4,8,5],
      [0,0,0,5,8,1,0,0,0],
      [0,0,4,0,0,0,0,0,0],
      [5,1,7,2,0,0,9,0,0],
      [6,0,2,0,0,0,3,7,0],
      [1,0,0,8,0,4,0,2,0],
      [7,0,6,0,0,0,8,1,0],
      [3,0,0,0,9,0,0,0,0]
    ];
};





function makeInteger(){
   // split the board at each new line, and use map
  // to split each row into an array of characters
    return board.split('\n').map(function(row){
     return row.split('').map(function(num){
      return +num;
          });
     });

   }  ;


function saveEmptyPositions(){
  // Create an array to save the positions
  var saveEmptyPositions = [];

  // Check every square in the puzzle for a zero
  for(var i = 0; i < board.length; i++) {
    for(var j = 0; j < board[i].length; j++) {
      // If a zero is found, save that position
      if(board[i][j] === 0) {
        emptyPositions.push([i, j]);
      }
    }
  }


  // Return the positions
  return emptyPositions;
};

function checkrow(board, row, value){
  // Iterate through every value in the row
  for(var i = 0; i < board[row].length; i++) {
    // If a match is found, return false
    if(board[row][i] === value) {
      return false;
    }
  }
  // If no match was found, return true
  return true;
};


function checkColumn(board,row,value){
  // Iterate through each value in the column
  for(var i = 0; i < board.length; i++) {
    // If a match is found, return false
    if(board[i][column] === value) {
      return false;
    }
  }
  // If no match was found, return true
  return true;
};

function check3X3Square(){
  // Save the upper left corner
  var columnCorner = 0,
      rowCorner = 0,
      squareSize = 3;

  // Find the left-most column
  while(column >= columnCorner + squareSize) {
    columnCorner += squareSize;
  }

  // Find the upper-most row
  while(row >= rowCorner + squareSize) {
    rowCorner += squareSize;
  }

  // Iterate through each row
  for(var i = rowCorner; i < rowCorner + squareSize; i++) {
    // Iterate through each column
    for(var j = columnCorner; j < columnCorner + squareSize; j++) {
      // Return false if a match is found
      if(board[i][j] === value) {        
        return false;
      }
    }
  }
  // If no match was found, return true
  return true;
};



function checkvalue(board, column, row, value) {
  if(this.checkRow(board, row, value) &&
    this.checkColumn(board, column, value) &&
    this.check3x3Square(board, column, row, value)) {
    // No match. Return true
    return true;
  } else {
    // Match found. Return false
    return false;
  }
};


function solvePuzzle(){
 
// Variables to track our position in the solver
var limit = 9;
      var i, row, column, value, found;
  for(i = 0; i < emptyPositions.length;) {
    row = emptyPositions[i][0];
    column = emptyPositions[i][1];
    // Try the next value
    value = board[row][column] + 1;
    // Was a valid number found?
    found = false;
    // Keep trying new values until either the limit
    // was reached or a valid value was found
    while(!found && value <= limit) {
      // If a valid value is found, mark found true,
      // set the position to the value, and move to the
      // next position
      if(this.checkValue(board, column, row, value)) {
        found = true;
        board[row][column] = value;
        i++;
      } 
      // Otherwise, try the next value
      else {
        value++;
      }
    }
    // If no valid value was found and the limit was
    // reached, move back to the previous position
    if(!found) {
      board[row][column] = 0;
      i--;
    }
  }

  // A solution was found! Log it
  board.forEach(function(row) 
    {
      console.log(row.join());
    });

  // return the solution
  return board;
}




function solveSudoku(board){
  var parsedBoard = this.parseBoard(board);
  var emptyPositions = this.saveEmptyPositions(parsedBoard);

  return this.solvePuzzle(parsedBoard , emptyPositions);
};
