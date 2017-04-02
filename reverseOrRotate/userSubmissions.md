## Other User Submissions
[cave.on](https://www.codewars.com/users/cave.on)
```js
function revrot(str, sz) {
  if (sz < 1 || sz > str.length)
    return '';

  let reverse = s => s.split('').reverse().join('');
  let rotate  = s => s.slice(1) + s.slice(0, 1);
  let sum_cubes = c => c.split('').reduce((a, b) => a + +b ** 3, 0);

  return str
    .match(new RegExp('.{' + sz + '}', 'g'))
    .map(c => sum_cubes(c) % 2 ? rotate(c) : reverse(c))
    .join('');
}
```
[crazyYuyang](https://www.codewars.com/users/crazyYuyang)
```js
function revrot(str, sz) {
   if(!sz||sz<0||sz>str.length)return '';
   var arr=str.match(new RegExp('\\d{'+sz+'}','g'));
   return arr.map(function(v){
     if(v.toString().split('').reduce((s,v)=>s+v*1,0)%2===0){
       return v.split('').reverse().join('');
     }
     else return v.slice(1)+v[0];
   }).join('');
}
```
[yangyanzhan](https://www.codewars.com/users/yangyanzhan)
```js
function revrot(str, sz){
  if(sz <= 0 || str.length <= 0 || sz > str.length)
    return '';
  var nums = [];
  while(str.length >= sz){
    nums.push(str.slice(0, sz));
    str = str.slice(sz);
  }
  nums = nums.map(function(num){
    var sum = num.replace(/[02468]/g, '').length;
    if(sum % 2 == 0)
      return num.split('').reverse().join('');
    else
      return num.slice(1) + num.slice(0, 1);
  });
  return nums.join('');
}
```
[ZozoFouchtra](https://www.codewars.com/users/ZozoFouchtra)
```js
function revrot(str, sz) {
  return ( sz<=0 || sz > str.length || str=="" ) ? ""
    : str2chunks(str,sz).map( chunk => isSumOfCubesOfDigitsOdd(chunk) ? rotate(chunk) : reverse(chunk) ).join("")
}

const str2chunks = (s,c) => s.match( new RegExp(".{"+c+"}", "g"))||[];
const isSumOfCubesOfDigitsOdd = str => str.replace(/[02468]/g,'').length%2;
const rotate = str => str.slice(1)+str[0];
const reverse = str => str.split('').reverse().join('')
```
