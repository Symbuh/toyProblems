var setZeroes = function(matrix) {
  let zeroed = []
  let zeroedTupple;
  let helper = (y, x) => {
      console.log('helping: ' + y + ' ' + x);
      matrix[y][x] = 0;
      zeroed[y][x] = true;
      for (let i = 0; i < matrix[y].length; i++) {
          if (matrix[y][i] !== 0 && zeroed[y][i] === false) {
              matrix[y][i] = 0;
              zeroed[y][i] = true;
          }
      }
      for (let i = 0; i < matrix.length; i++) {
          if (matrix[i][x] !== 0 && zeroed[i][x] === false) {
              matrix[i][x] = 0;
              zeroed[i][x] = true;
          }
      }
  }

  for (let i = 0; i < matrix.length; i++) {
      zeroedTupple = [];
      for (let j = 0; j < matrix[i].length; j++) {
          zeroedTupple.push(false);
      }
      zeroed.push(zeroedTupple);
  }

  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
          if (matrix[i][j] === 0 && zeroed[i][j] === false) {
              helper(i, j);
          }
      }
  }

  return matrix;
  /*
      Input: Matrix
      Output: Zeroed Matrix
      Edge: matrix length is 1
      constraints: stated

      1. Iterate to the first zero
      2. Zero everything above it
      3. Zero everything below it
  */
};