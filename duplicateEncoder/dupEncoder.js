function duplicateEncode(word){
  // setup vars 
  var charArr = word.toLowerCase().split('');
  var encodeStr = '';
  var charCount = charArr.length;

  // first for to test each char
  for (var i = 0; i < charArr.length; i++) {
    var j = 0;        

    // second for to test first char against others
    for (j; j < charCount; j++) {
      // if not same char or last char
      if (i != j || j == charCount - 1) {
        // if chars are equal and not last char
        if (charArr[i] == charArr[j] && j != charCount -1) {
          encodeStr += ")";
          break; // no need to test rest, dup found
          // if last char
        } else if (j == charCount - 1) {
          encodeStr += "(";
        } // end if,  char test
      } // end if, arr index test
    } // end for, inner
  } // end for, outer
  return encodeStr;
} // end main func