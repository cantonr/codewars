// first attempt, terrible O()
function whoIsNext(names, r){
  var count = 1;
  while (count != r) {
    var name = names.shift();
    names.push(name);
    names.push(name);
    count++;
  }
  return names.shift();
}
// visualization
1 2 3 4 5 1 1 2 2 3  3  4  4  5  5  1  1  1  1  2  2  2  2  3  3  3  3  4  4  4  4  5  5  5  5
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35

5+5*2+10*2+20*2+40*2+80*2

r+(r*2)+(r*2)*2+((r*2)*2)*2

// refactor 1
function whoIsNext(names, r){
  if (r <= 5) {
    return names[r-1];
  }
  var dbl = 5;
  var total = dbl;
  while (total < r) {
    total = total + (dbl*2);
    dbl *= 2;
  }
  var ratio = (r-(total-dbl))/dbl;
  console.log(ratio);
  if (ratio <= .2) {
    return names[0];
  } else if (ratio <= .4) {
    return names[1];
  } else if (ratio <= .6) {
    return names[2];
  } else if (ratio <= .8) {
    return names[3];
  } else {
    return names[4];
  }
}

// refactor 2 ~ Final Submission
function whoIsNext(names, r){
  if (r <= names.length) {
    return names[r-1];
  }
  var dbl = names.length;
  var total = dbl;
  while (total < r) {
    total = total + (dbl*2);
    dbl *= 2;
  }
  return names[Math.ceil(((r-(total-dbl))/dbl)*names.length)-1];
}
