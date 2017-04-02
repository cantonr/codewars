function revrot(str, sz) {
  if (sz == 0 || str == "") {
    return "";
  } else {
    var partsArr = [];
    var returnStr = "";
    // get chunks into array
    for(var i=0; i < str.length; i+=sz) {
      var strPart = str.substring(i, i+sz);
      if (strPart.length == sz) {
        partsArr.push(strPart);
      };
    };
    // loop through chunks
    partsArr.forEach(function(val){
      var splitChars = val.split('');
      var chunkVal = 0;
      for (var i = 0; i < sz; i++) {
        chunkVal += Math.pow(Number(splitChars[i]),3);
      }
      if (chunkVal % 2 == 0) {
        for (var i = 0; i < sz; i++) {
          returnStr += splitChars.pop();
        };
      } else {
        for (var i = 1; i < sz; i++) {
          returnStr += splitChars[i];
        }
        returnStr += splitChars[0];
      }
    });
    return returnStr;
  }
};

/****** REVISION **********/
function revrot(str, sz) {
  if (sz <= 0 || str == "" || str.length < sz) {
    return "";
  } else {
    var partsArr = [];
    var returnStr = "";
    // get chunks into array
    for(var i=0; i < str.length; i+=sz) {
      var strPart = str.substring(i, i+sz);
      if (strPart.length == sz) {
        partsArr.push(strPart);
      };
    };
    // loop through chunks
    partsArr.forEach(function(val){
      var splitChars = val.split('');
      var chunkVal = 0;
      for (var i = 0; i < sz; i++) {
        chunkVal += Math.pow(Number(splitChars[i]),3);
      }
      if (chunkVal % 2 == 0) {
        for (var i = 0; i < sz; i++) {
          returnStr += splitChars.pop();
        };
      } else {
        for (var i = 1; i < sz; i++) {
          returnStr += splitChars[i];
        }
        returnStr += splitChars[0];
      }
    });
    return returnStr;
  }
};
