function domainName(url){
  var firstSplit = url.split(/^http:\/\/www.|http:\/\/|https:\/\/www.|https:\/\/|www\./);
  if (firstSplit[0] == '') {
    return firstSplit[1].split('.')[0];
  } else {
    return firstSplit[0].split('.')[0];
  }
}
