[User: nitroxido](https://www.codewars.com/users/nitroxido)
```js
function validPhoneNumber(phoneNumber){
  return /^\(\d{3}\) \d{3}\-\d{4}$/.test(phoneNumber);
}
```
[User: kirilloid](https://www.codewars.com/users/kirilloid)
```js
var validPhoneNumber = RegExp.prototype.test.bind(/^\(\d{3}\) \d{3}-\d{4}$/);
```
