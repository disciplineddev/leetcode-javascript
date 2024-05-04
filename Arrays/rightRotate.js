function rightRotate(arr, k) {
  const rotationIndex = k % arr.length;
  const rotatedPart = arr.slice(-rotationIndex);
  const remainingPart = arr.slice(0, -rotationIndex);

  return rotatedPart.concat(remainingPart);
}

// Example usage:
const array = [1, 2, 3, 4, 5];
const k = 2;
console.log(rightRotate(array, k)); // Output: [4, 5, 1, 2, 3]
