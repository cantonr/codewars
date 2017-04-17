[User: NaMe613](https://www.codewars.com/users/NaMe613)
```js
function sumDigPow(a, b) {
  var ans = [];
  while(a <= b){
    if(a.toString().split('').reduce((x,y,i)=>x + +y ** (i + 1),0) == a)
      ans.push(a);
    a++;
  }
  return ans;
}
```
[User: DmitryTa](https://www.codewars.com/users/DmitryTa)
```js
function sumDigPow(a, b) {
  var arr = [];
  for (var i = a; i <= b; i++) {
    var sum = 0;
    for (var j = 0; j <= String(i).length; j++) {
      sum += Math.pow(parseInt(String(i)[j]), j+1);  
      if (sum == i) arr.push(i);
    }
  }
  return arr;
}
```
[User: smile67](https://www.codewars.com/users/smile67)
```js
function sumDigPow(a, b) {
  l=[]; for (i=a;i<=b;i++) {s=i+""; c=0; for (j=0;j<s.length;j++) c+=Math.pow(s.charCodeAt(j)-48,j+1); if (c==i) l.push(i)}
  return l;
}
```
