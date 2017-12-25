[SagePtr](https://www.codewars.com/users/SagePtr)
```js
function score( dice ) {
  var dc = [0,0,0,0,0,0];
  var tdr = [1000,200,300,400,500,600];
  var sdr = [100,0,0,0,50,0];
  dice.forEach(function(x){ dc[x-1]++; });
  return dc.reduce(function(s,x,i){
    return s + (x >= 3? tdr[i] : 0) + sdr[i]*(x % 3);
  },0);
}
```
[chewie](https://www.codewars.com/users/chewie)
```js
function score( dice ) {
  var six=0, five=0, four=0, three=0, too=0, one=0;
  var i = 0;
  while (i < 5) {
    if (dice[i] == 6) { six++; }
    if (dice[i] == 5) { five++; }
    if (dice[i] == 4) { four++; }
    if (dice[i] == 3) { three++; }
    if (dice[i] == 2) { too++; }
    if (dice[i] == 1) { one++; }
    i++;
  }
  var r = 0;
  if (one > 2) { r += 1000; one -= 3;}
  if (six > 2) { r += 600; }
  if (five > 2) { r += 500; five -= 3;}
  if (four > 2) { r += 400; }
  if (three > 2) { r += 300; }
  if (too > 2) { r += 200; }
  r += one * 100;
  r += five * 50;
  return r;
}
```
