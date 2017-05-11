[User: quinta](https://www.codewars.com/users/quinta)
```js
function domainName(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}
```
[User: MuffinGuest](https://www.codewars.com/users/MuffinGuest)
```js
function domainName(url){
  return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
}
```
[User: sow4063@gmail.com](https://www.codewars.com/users/sow4063@gmail.com)
```js
function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};
```
