function leftRotate(arr, k) {
  // Calculate the effective rotation index
  const rotationIndex = k % arr.length;

  // Slice the array into two parts and concatenate them in the rotated order
  const rotatedPart = arr.slice(0, rotationIndex);
  const remainingPart = arr.slice(rotationIndex);

  return remainingPart.concat(rotatedPart);
}

// Example usage:
const array = [1, 2, 3, 4, 5];
const k = 2;
console.log(leftRotate(array, k)); // Output: [3, 4, 5, 1, 2]
