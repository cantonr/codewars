function pigIt(str){
  var strArr = str.split(' ');
  return strArr.map(function(item) {
    return item.substr(1) + item.charAt(0) + 'ay';
  }).join(' ');
}
