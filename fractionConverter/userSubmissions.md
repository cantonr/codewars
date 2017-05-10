[User: ryanjmack](https://www.codewars.com/users/ryanjmack)
```js
function mixedFraction(s){
//input s will be a simple fraction i.e. "4/3", "-10/7", "-22/7"
  var fraction = s.split("/").map(val => Number(val)),
      numerator = fraction[0],
      denominator = fraction[1],
      integer = 0;

  //anything divided by 0 produces an error
  if (denominator === 0) {
      throw new Error("Division by zero");
  }

  //0 divided by anything is 0
  if (numerator === 0) {
    return "0";
  }

  /* calculate gcf and divide numerator and denominator by
     it to reduce improper fraction as much as possible */
  var gcf = greatestCommonFactor(numerator, denominator);
      numerator /= gcf;
      denominator /= gcf;

  /* calculate the integer and numerator for
     mixed fraction; round integer down */
  integer += ~~(numerator / denominator);
  numerator %= denominator;

  //if output is a mixed number
  if (integer) {
      //checks to see if fraction will be negative
      if (numerator < 0 || denominator < 0) {
        //integer needs proper sign
        integer *= (integer < 0) ? 1 : -1;
      }
      return (numerator !== 0)
      //integer is signed already - make numerator and denominator positive
              ? `${integer} ${Math.abs(numerator)}/${Math.abs(denominator)}`
              : `${integer}`;
  }

  //if output is a simple fraction
  else {
    if (denominator < 0) {
      //make sure numerator is negative
      numerator *= (numerator < 0) ? 1 : -1;
    }
    return `${numerator}/${Math.abs(denominator)}`;
  }
}

/* calculates gcf utilizing Euclid's algorithm
   https://en.wikipedia.org/wiki/Greatest_common_divisor#Using_Euclid.27s_algorithm */
function greatestCommonFactor(a, b) {
  return (b === 0) ? a : greatestCommonFactor(b, a % b);
}
```
[User: myjinxin2015](https://www.codewars.com/users/myjinxin2015)
```js
gcd=(a,b)=> b==0 ? a : gcd(b,a%b);
function mixedFraction(s){
  var [x,y]=s.split("/").map(z=>+z);
  if (y==0) throw "ZeroDivisionError";
  if (x%y==0) return ""+x/y;
  var g=gcd(x,y),add=x/y<0 ? "-" : "";
  x=Math.abs(x/g),y=Math.abs(y/g);
  return add+(x<y ? "" : Math.floor(x/y)+" ")+x%y+"/"+y;
}
```
[User: smile67](https://www.codewars.com/users/smile67)
```js
function mixedFraction(s){
  sp=s.split('/'); z=Math.abs(z1=parseInt(sp[0])); n=Math.abs(n1=parseInt(sp[1]));
  e=z<n?z:n; for (var i=e; i>1; i--) if (z%i==0&&n%i==0) { z/=i; n/=i; break; };
  if (n==0) throw ("ZeroDivisionError"); if (z==0) return "0";
  r=(b=z/n|0)!=0?b.toString():"";
  if ((c=z%n)!=0) { r+=r.length>0?" ":""; r+=c.toString()+"/"+n; }
  return z1*n1<0?"-"+r:r;
}
```
