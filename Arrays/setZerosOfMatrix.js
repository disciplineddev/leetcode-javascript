function setZeroes(matrix) {
  let isColZero = false;
  let rows = matrix.length;
  let cols = matrix[0].length;

  // Determine if first column should be zero
  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) {
      isColZero = true;
    }

    // Use first row and first column as markers
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  // Iterate over the array once again and update the elements using the markers
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // See if the first row needs to be set to zero as well
  if (matrix[0][0] === 0) {
    for (let j = 1; j < cols; j++) {
      matrix[0][j] = 0;
    }
  }

  // See if the first column needs to be set to zero
  if (isColZero) {
    for (let i = 0; i < rows; i++) {
      matrix[i][0] = 0;
    }
  }
}

// Example usage:
let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
setZeroes(matrix);
console.log(matrix); // Output: [[1,0,1],[0,0,0],[1,0,1]]
