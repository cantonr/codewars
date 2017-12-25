function score( dice ) {
  var dieCounts = [0,0,0,0,0,0];
  var finalScore = 0;
  dice.forEach(function(val, index) {
    dieCounts[val-1]++;
  }); // end dice forEach
  dieCounts.forEach(function(val, index) {
    if (val >= 3) {
      index+1 === 1 ? finalScore += 1000 : finalScore +=  (index+1) * 100;
    } 
    if (index+1 === 1) {
      finalScore += val%3 * 100;
    }
    if (index+1 === 5) {
      finalScore += val%3 * 50;
    }
  }); // end dieCounts forEach
  return finalScore;
} // end score function
