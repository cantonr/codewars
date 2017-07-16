function anagrams(word, words) {
  var wordArr = word.split('').sort();
  var matchArr = words.filter(function (i) {
    var indexWordArr = i.split('').sort();
    var isAnagram = true;
    if (wordArr.length !== indexWordArr.length) {
      isAnagram = false;
      return;
    } else {
      for (var j = 0; j < wordArr.length; j++) {
        if (wordArr[j] !== indexWordArr[j]) {
          isAnagram = false;
          return;
        }
      }
    }
    if (isAnagram) {
      return i;
    }
  });
  return matchArr;
}
