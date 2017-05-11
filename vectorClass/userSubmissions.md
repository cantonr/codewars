[User: SagePtr](https://www.codewars.com/users/SagePtr)
```js
var Vector = function (components) {
  this.x = components;
};
Vector.prototype.add = function(b){
  var a = this.x
  b = b.x;
  if(a.length !== b.length) throw new TypeError("Vectors have different length");
  return new Vector(a.map(function(x,i){ return x + b[i]; }));
}
Vector.prototype.subtract = function(b){
  var a = this.x;
  b = b.x;
  if(a.length !== b.length) throw new TypeError("Vectors have different length");
  return new Vector(a.map(function(x,i){ return x - b[i]; }));
}
Vector.prototype.dot = function(b){
  var a = this.x;
  b = b.x;
  if(a.length !== b.length) throw new TypeError("Vectors have different length");
  return a.reduce(function(s,x,i){ return s + x * b[i]; },0);
}
Vector.prototype.equals = function(b){
  var a = this.x;
  b = b.x;
  if(a.length !== b.length) return false;
  return a.every(function(x,i){ return x === b[i]; });
}
Vector.prototype.norm = function(){
  var a = this.x;
  return Math.sqrt(a.reduce(function(s,x){ return s + x*x }, 0));
}
Vector.prototype.toString = function(){
  return '(' + this.x.join(',') + ')';
}
```
[User: tutanton](https://www.codewars.com/users/tutanton)
```js
var Vector = function (components) {
  this.items = components;
  this.length = components.length;
};

Vector.prototype = {
  do: function (action, vector) {
    if (vector.length !== this.length) { throw 'Different Length!'; }
    return new Vector(this.items.map(function (v, k) {
      return eval(v + action + vector.items[k])
    }));
  },
  add: function (v) { return this.do('+', v); },
  subtract: function (v) { return this.do('-', v); },
  sum: function (v) { return eval(v.items.join('+')); },
  dot: function (v) { return this.sum(this.do('*', v)); },
  norm: function () { return Math.sqrt(this.dot(this)); },
  toString: function() { return '(' + this.items + ')'; },
  equals: function (v) { return this.toString() == v.toString(); }  
};
```
[User: melanoman](https://www.codewars.com/users/melanoman)
```js
var Vector = function (components) {
  this.data = components;
};

Vector.prototype = {
  s: function(v) { if (v.data.length != this.data.length) { throw "Length mismatch"; } },
  add: function(v) {
    this.s(v);
    return new Vector(this.data.map((e,i) => e + v.data[i])) },
  subtract: function(v) {
    this.s(v);
    return new Vector(this.data.map((e,i) => e - v.data[i])) },
  dot: function(v) {
    this.s(v);
    return this.data.reduce((r,e,i) => r + e * v.data[i], 0) },
  norm: function() {
    return Math.sqrt(this.data.reduce((r,e) => r + e * e), 0) },
  equals: function(v) {
    if (v.data.length != this.data.length) { return false; }
    return this.data.reduce((r,e,i) => r && v.data[i] === e);
  },
  toString: function(v) { return '(' + this.data.join(',') + ')'; }
};
```
