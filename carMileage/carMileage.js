function isInteresting(number, awesomePhrases) {
  if (number < 100) {
    return 0;
  } else if (awesomePhrases.length > 0) { // check phrases
    for (var i = 0; i < awesomePhrases.length; i++) {
      if (number == awesomePhrases[i]-2 || number == awesomePhrases[i]-1) {
        return 1;
      } else if (number == awesomePhrases[i]) {
        return 2;
      } else {
        return 0;
      }
    }
  } else { // check other "interesting" numbers
    var numArr = number.toString().split('');
    for (var i = 0; i < numArr.length; i++) {
      // if close (return 1)
      if (true) {

      }
    }
  }
}

function zerosFollow(num) {
  var ret = 2;
  var numArr = num.toString().split('');
  for (var i = 1; i < numArr.length; i++) {
    if (numArr[i] != '0' && i != numArr.length-1 || numArr[numArr.length-1] < 8) {
      ret = 0;
    } else if (i == numArr.length-1 && numArr[numArr.length-1] >= 8
        && numArr[i]) {
      ret = 1;
    }
  }
  return ret;
}
