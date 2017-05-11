// first attempt
function validPhoneNumber(phoneNumber) {
  if (phoneNumber.length != 14) {
    return false;
  }
  var regex = /[0-9]/;
  var phoneArr = phoneNumber.split('');
  for (var i = 0; i < phoneArr.length; i++) {
    if ((i==0 && phoneArr[i]!='(') ||
        (i==4 && phoneArr[i]!=')') ||
        (i==5 && phoneArr[i]!=' ') ||
        (i==9 && phoneArr[i]!='-')) {
      return false;
    } else if (!regex.test(Number(phoneArr[i]))) {
      return false;
    }
  }
  return true;
}

// refactor - FINAL SUBMISSION
function validPhoneNumber(phoneNumber) {
  var regex = /^\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/g;
  return regex.test(phoneNumber);
}
