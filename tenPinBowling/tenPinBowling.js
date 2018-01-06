function bowlingScore(frames) {
  var scoreArr = frames.split(' ');
  var frameScores = [];
  var totalScore = 0;

  console.log('scoreArr: ', scoreArr);

  scoreArr.forEach(function(val, index) {
    var splitVal = val.split('').map( (val) => isNaN(parseInt(val)) ? val : parseInt(val));
    if (index != 9) {
      if (val === 'X') {
        if (index === 0) {
          frameScores[index] = 10;
        }
        if (index === 1) {
          frameScores[index] = 10;
          if (scoreArr[index-1] == 'X') {
            frameScores[index-1] += 10
          } else {

          }
        }
        if (index >= 2) {
          frameScores[index] = 10;
          frameScores[index-1] == 10 ? frameScores[index-1] += 10 : false
          frameScores[index-2] == 20 ? frameScores[index-2] += 10 : false
        }
      } else if (splitVal[1] === '/') {
        frameScores[index] = 10;
      } else {
        if (index === 0) {
          frameScores[index] = splitVal[0] + splitVal[1];
        }
        if (index === 1) {
          frameScores[index] = splitVal[0] + splitVal[1];
          scoreArr[index-1] !== 'X' ? frameScores[index-1] += splitVal[0] : false
        }
        if (index >= 2) {
          frameScores[index] = splitVal[0] + splitVal[1];
          frameScores[index-1] == 10 ? frameScores[index-1] += 10 : false
          frameScores[index-2] == 20 ? frameScores[index-2] += 10 : false
        }
      }
    } else {

    }
    console.log('frameScores', index,': ', frameScores[index]);
    // console.log('index: ', index);
    // var frame = val.split('');
  }); // end forEach

  console.log(frameScores)
  frameScores.map(function(val) {
    totalScore += val;
  });
  console.log('Total Score: ', totalScore)
  return totalScore;
}

// bowlingScore('X X 9/ 80 X X X 8/ 7/ 44');
bowlingScore('X X X X X X X X X 9/9');
