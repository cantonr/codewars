[User: hencethus](https://www.codewars.com/users/hencethus)
```js
function findNb(m) {
  var n = 0
  while (m > 0) m -= ++n**3
  return m ? -1 : n
}
```
[User: kanzelm3](https://www.codewars.com/users/kanzelm3)
```js
function findNb(m) {
  let n = 0;
  let sum = 0;
  while (sum < m) {
    n++;
    sum += Math.pow(n, 3);
  }
  return sum === m ? n : -1;
}
```
[User: acraileanu](https://www.codewars.com/users/acraileanu)
```js
// this is based on the formula that the sum of the first n cubes equals (n * (n + 1) / 2) ^ 2
// also, the sum of the first n cubes is always a square
function findNb(m) {
    m = Math.sqrt(m) * 2;
    if (m != parseInt(m)){
      return -1;
    }
    var result = parseInt(Math.sqrt(m));
    return (result * (result + 1) == m) ? result : -1;
}
```
[User: kauyeung253](https://www.codewars.com/users/kauyeung253)
```js
function findNb(m) {
    // your code
  var n = 0;

  while (m > 0) m -= Math.pow(++n, 3);

  return m ? -1 : n;
}
```
[User: LesRamer](https://www.codewars.com/users/LesRamer)
```js
var findNb = m =>
{
  var n = Math.floor((4*m)**.25);
  var sum = x => (x*(x+1)/2)**2;
  return sum(n) == m ? n : -1;
}
```
