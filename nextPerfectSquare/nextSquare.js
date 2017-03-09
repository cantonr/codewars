function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  var root = Math.sqrt(sq);
  if (Number.isInteger(root)) {
    return (root + 1)**2;
  } else {
    return -1;
  }
}

function findNextSquareRefactor(sq) {
  return Number.isInteger(Math.sqrt(sq)) ? (Math.sqrt(sq) + 1)**2 : -1;
}
