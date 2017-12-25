function score( dice ) {
  var sortedDie = dice.sort();
  var dieCounts = [0,0,0,0,0,0];
  var finalScore = 0;
  sortedDie.forEach(function(val, index) {
    dieCounts[val-1]++;
  })
  console.log('ones.. \t', dieCounts[0]);
  // dieCounts.forEach(function(val, index) {
  //   if (val >= 3) {
  //     switch (index) {
  //       case 1:
  //         dieCounts[0]++;
  //         break;
  //       case 2:
  //         dieCounts[1]++;
  //         break;
  //       case 3:
  //         dieCounts[2]++;
  //         break;
  //       case 4:
  //         dieCounts[3]++;
  //         break;
  //       case 5:
  //         dieCounts[4]++;
  //         break;
  //       case 6:
  //         dieCounts[5]++;
  //         break;
  //       default:
  //     }
  //   }
  // })
}
