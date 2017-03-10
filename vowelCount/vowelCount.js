function getCount(str) {
  var vowelsCount = 0;
  var charArray = str.toLowerCase().split('');

  charArray.forEach(function(char) {
    vowelsCount += char == 'a' ? 1 : 0;
    vowelsCount += char == 'e' ? 1 : 0;
    vowelsCount += char == 'i' ? 1 : 0;
    vowelsCount += char == 'o' ? 1 : 0;
    vowelsCount += char == 'u' ? 1 : 0;
  });

  return vowelsCount;
}
