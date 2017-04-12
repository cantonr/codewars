function reverseWords(str) {
  var wordArr = str.split(' ');
  var spaces = " ";
  var returnStr = "";
  for (var i = 0; i < str.length-1; i++) {
    if (wordArr[i] == undefined) {
      spaces += " ";
    } else if (wordArr[i] != undefined && i == 0){
      returnStr += wordArr[i].split('').reverse().join('');
    } else {
      returnStr += spaces;
      returnStr += wordArr[i].split('').reverse().join('');
      spaces = " ";
    }
  }
  return returnStr;
}
