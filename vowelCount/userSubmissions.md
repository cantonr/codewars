# Other User Submissions
[User: Balkoth](https://www.codewars.com/users/Balkoth)
```js
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}
```
[User: colbydauph](https://www.codewars.com/users/colbydauph)
```js
function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}
```
[User: Clarity](https://www.codewars.com/users/Clarity)
```js
function getCount(str) {
  var vowelsCount = 0;
  vowelsCount = str.match(/[aeiou]/gi);
  return vowelsCount ? vowelsCount.length:0;
}
```
