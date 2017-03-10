function iqTest(numbers){
  var odd = 0, even = 0, oddIndex = 0, evenIndex = 0;
  var numArr = numbers.split(' ').map(Number);

  numArr.forEach(function (nums, index, array) {
    if (nums % 2 == 0) {
      even++;
      evenIndex = index + 1;
    } else {
      odd++;
      oddIndex = index + 1;
    }
  });
  return odd == 1 ? oddIndex : evenIndex;
}
