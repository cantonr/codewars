function bowlingScore(frames) {
  var scoreArr = frames.split(' ');
  var frameScores = [];
  var totalScore = 0;

  scoreArr.forEach(function(val, index) {
    var splitVal = val.split('').map( (val) => isNaN(parseInt(val)) ? val : parseInt(val));
    if (index != 9) {
      if (val === 'X') {
        if (index === 0) { // first frame
          frameScores[index] = 10;
        } else if (index === 1) { // second frame
          frameScores[index] = 10;
          if (scoreArr[index-1] == 'X' || scoreArr[index-1].match('/') != null) {
            frameScores[index-1] += 10
          }
        } else { // 3rd or greater frame
          frameScores[index] = 10;
          if (scoreArr[index-1] == 'X' && scoreArr[index-2] == 'X') {
            frameScores[index-1] += 10
            frameScores[index-2] += 10
          } else if (scoreArr[index-1] == 'X' || scoreArr[index-1].match('/') != null) {
            frameScores[index-1] += 10
          }
        }
      } else if (splitVal[1] === '/') {
        if (index === 0) { // first frame
          frameScores[index] = 10;
        } else if (index === 1) { // second frame
          frameScores[index] = 10;
          if (scoreArr[index-1] == 'X') {
            frameScores[index-1] += 10;
          } else if (scoreArr[index-1].match('/') != null) {
            frameScores[index-1] += splitVal[0];
          }
        } else { // 3rd or greater frame
          frameScores[index] = 10;
          if (scoreArr[index-1] == 'X' && scoreArr[index-2] == 'X') {
            frameScores[index-1] += 10;
            frameScores[index-2] += splitVal[0];
          } else if (scoreArr[index-1].match('/') != null) {
            frameScores[index-1] += splitVal[0];
          } else if (scoreArr[index-1] == 'X') {
            frameScores[index-1] += 10;
          }
        }
      } else {
        if (index === 0) {
          frameScores[index] = splitVal[0] + splitVal[1];
        } else if (index === 1) {
          frameScores[index] = splitVal[0] + splitVal[1];
          if (scoreArr[index-1] == 'X') {
            frameScores[index-1] += splitVal[0] + splitVal[1];
          } else if (scoreArr[index-1].match('/') != null) {
            frameScores[index-1] += splitVal[0];
          }
        } else {
          frameScores[index] = splitVal[0] + splitVal[1];
          if (scoreArr[index-1] == 'X' && scoreArr[index-2] == 'X') {
            frameScores[index-1] += splitVal[0];
            frameScores[index-2] += splitVal[0] + splitVal[1];
          } else if (scoreArr[index-1] == 'X') {
            frameScores[index-1] += splitVal[0] + splitVal[1];
          } else if (scoreArr[index-1].match('/') != null) {
            frameScores[index-1] += splitVal[0];
          }
        }
      }
    } else { // handle 10th frame
      if (splitVal.length === 2) {
        frameScores[index] = splitVal[0] + splitVal[1];
        if (scoreArr[index-1] == 'X' && scoreArr[index-2] == 'X') {
          frameScores[index-1] += splitVal[0];
          frameScores[index-2] += splitVal[0] + splitVal[1];
        } else if (scoreArr[index-1] == 'X') {
          frameScores[index-1] += splitVal[0] + splitVal[1];
        } else if (scoreArr[index-1].match('/') != null) {
          frameScores[index-1] += splitVal[0];
        }
      } else {
        if (splitVal[0] == 'X') {
          frameScores[index] = 10;
          if (scoreArr[index-1] == 'X' && scoreArr[index-2] == 'X') {
            frameScores[index-1] += 10
            frameScores[index-2] += 10
          } else if (scoreArr[index-1] == 'X' || scoreArr[index-1].match('/') != null) {
            frameScores[index-1] += 10
          }
          if (splitVal[1] == 'X') {
            frameScores[index] += 10;
            if (scoreArr[index-1] == 'X') {
              frameScores[index-1] += 10;
            }
            if (splitVal[2] == 'X') {
              frameScores[index] += 10;
            } else {
              frameScores[index] += splitVal[2];
            }
          } else if (splitVal[2] == '/') {
            frameScores[index] += 10;
            if (scoreArr[index-1] == 'X') {
              frameScores[index-1] += splitVal[1];
            }
          }
        } else {
          splitVal[2] == 'X' ? frameScores[index] = 20 : frameScores[index] = 10 + splitVal[2];
          if (scoreArr[index-1] == 'X' && scoreArr[index-2] == 'X') {
            frameScores[index-1] += splitVal[0];
            frameScores[index-2] += splitVal[0];
          } else if (scoreArr[index-1].match('/') != null) {
            frameScores[index-1] += splitVal[0];
          } else if (scoreArr[index-1] == 'X') {
            frameScores[index-1] += 10;
          }
        }
      } // end else (splitVal > 2)
    } // end else (handle 10th)
  }); // end forEach

  frameScores.map(function(val) {
    totalScore += val;
  });

  return totalScore;
}
