function sumDigPow(a, b) {
  var output = [];
  // loop input params
  for (var i = a; i <= b; i++) {
    var numParts = i.toString().split('').map(Number);
    var sumParts = 0;
    // loop and test for equality
    for (var j = 0; j < numParts.length; j++) {
      sumParts += Math.pow(numParts[j], j+1);
      if (sumParts == i) {
        output.push(i);
      }
    }
  }
  return output;
}
