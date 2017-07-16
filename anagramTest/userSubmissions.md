[User: marutiborker](https://www.codewars.com/users/marutiborker)
```js
String.prototype.sort = function() {
  return this.split("").sort().join("");
};

function anagrams(word, words) {
  return words.filter(function(x) {
      return x.sort() === word.sort();
  });
}
```
[User: Azuaron](https://www.codewars.com/users/Azuaron)
```js
function anagrams(word, words) {
  word = word.split('').sort().join('');
  return words.filter(function(v) {return word == v.split('').sort().join('');});
}
```
[User: sashapd](https://www.codewars.com/users/sashapd)
```js
let anagrams = (word, words) => words.filter(w => w.split('').sort().join('') === word.split('').sort().join(''));
```
