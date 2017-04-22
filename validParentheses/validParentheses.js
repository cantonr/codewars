function validParentheses(parens){
  var leftParen = 0;
  var rightParen = 0;
  var parenArr = parens.split('');
  var ret = false;
  for (var i = 0; i < parenArr.length; i++) {
    if(parenArr[i] == '(') {
      leftParen++;
    } else {
      rightParen++
    }
    if (i == parenArr.length-1 && leftParen == rightParen) {
      ret = true;
    }
  }
  return ret;
}
