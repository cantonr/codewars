[User: Balkoth](https://www.codewars.com/users/Balkoth)
```js
function whoIsNext(names, r) {
  var l = names.length;
  while (r >= l) { r -= l; l *= 2; }
  return names[Math.ceil(names.length * r / l)-1];
}
```
[User: huanggm](https://www.codewars.com/users/huanggm)
```js
function whoIsNext(names, r){
  var l = names.length, ini = l;
  while(r > ini) {
    r -= ini;
    ini *= 2;
  }
  return names[Math.ceil(r * l / ini) - 1];
}
```
[User: kellykoopter](https://www.codewars.com/users/kellykoopter)
```js
function whoIsNext(names, n){
  x=names.length;
  i=1;

  while (n > x){
    n -= x;
    x *= 2;
    i *= 2;
  }

  return (names[parseInt((n - 1)/i)]);   
}
```
