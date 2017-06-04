[User: lloop](https://www.codewars.com/users/lloop)
```js
function pigIt(str){
  return str.split(' ').map(function(el){
    return el.slice(1) + el.slice(0,1) + 'ay';
  }).join(' ');
}
```
[User: evilscott](https://www.codewars.com/users/evilscott)
```js
function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}
```
[User: mozart](https://www.codewars.com/users/mozart)
```js
pigIt = s => s.split(' ').map(e => e.substr(1) + e[0] + 'ay').join(' ');
```
