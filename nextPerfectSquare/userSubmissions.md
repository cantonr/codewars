# Other User Submissions
[User: Downfall](https://www.codewars.com/users/-Downfall)  
```js
function findNextSquare(sq) {
  return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}
```
[User: azar1787](https://www.codewars.com/users/azar1787)
```js
function findNextSquare(sq) {
  var number = Math.sqrt(sq);
  if(Math.round(number) === number) {
    return Math.pow(++number, 2)
  }
  return -1;
}
```
[User: chrisd19](https://www.codewars.com/users/chrisd19)
```js
function findNextSquare(sq) {
  var root = Math.sqrt(sq);
  return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}
```
