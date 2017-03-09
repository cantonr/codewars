String.prototype.toJadenCase = function () {
  // split each word into an array
  var wordArr = this.split(" ");

  // var to build return string
  var jadenWordStr = "";

  // loop through wordArr
  wordArr.forEach (function (word, index, arr) {
    // get first char and uppercase it
    var upperFirst = word.charAt(0).toUpperCase();

    // if not last word add word and space to return string
    if (index < wordArr.length - 1) {
      jadenWordStr += upperFirst.concat(word.substr(1)) + " ";
    } else {
      jadenWordStr += upperFirst.concat(word.substr(1));
    }
  });
    // return in JadenCase
    return jadenWordStr;
};
