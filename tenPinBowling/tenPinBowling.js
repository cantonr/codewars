function bowlingScore(frames) {
  var scoreArr = frames.split(' ');
  var frameScores = [];
  scoreArr.forEach(function(val, index) {
    if (val === 'X') {
      if (index === 0) {
        frameScores[index] = 10;
      } else if (index === 1) {

      }
    }
    var frame = val.split('');
  });
}
