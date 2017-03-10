# Other User Submissions
[User: elmaano](https://www.codewars.com/users/elmaano)
```js
function iqTest(numbers){
  numbers = numbers.split(" ").map(function(el){return parseInt(el)});

  var odd = numbers.filter(function(el){ return el % 2 === 1});
  var even = numbers.filter(function(el){ return el % 2 === 0});

  return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
}
```
[User: caspinall](https://www.codewars.com/users/caspinall)
```js
function iqTest(numbers){
  var nums = numbers.split(" ").map(x => x % 2);  
  var sum = nums.reduce((a,b) => a + b);  
  var target = sum > 1 ? 0 : 1;

  return nums.indexOf(target) + 1;
}
```
[User: CharlesMilam](https://www.codewars.com/users/CharlesMilam)
```js
function iqTest(numbers){
  var ary = numbers.split(" ")
  var even = []
  var odd = []

  ary.forEach(function(num){Number(num) % 2 == 0 ? even.push(num) : odd.push(num)})

  return even.length > odd.length ? ary.indexOf(odd[0]) + 1 : ary.indexOf(even[0]) + 1  
}
```
