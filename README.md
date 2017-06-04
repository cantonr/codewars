<!-- TOC depthFrom:2 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Simple Pig Latin](#simple-pig-latin)
- [Extract the domain name from a URL](#extract-the-domain-name-from-a-url)
- [Simple fraction to mixed number converter](#simple-fraction-to-mixed-number-converter)
- [Last digit of a large number](#last-digit-of-a-large-number)
- [Vector class](#vector-class)
- [Valid Phone Number](#valid-phone-number)
- [Double Cola](#double-cola)
- [Valid Parenthesis](#valid-parenthesis)
- [Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!](#take-a-number-and-sum-its-digits-raised-to-the-consecutive-powers-and-eureka)
- [Reverse Words](#reverse-words)
- [Build a pile of Cubes](#build-a-pile-of-cubes)
- [Reverse or Rotate](#reverse-or-rotate)
- [IQ Test](#iq-test)
- [Vowel Count](#vowel-count)
- [Find the next perfect square!](#find-the-next-perfect-square)
- [Duplicate Encoder](#duplicate-encoder)
- [Jaden Case Strings](#jaden-case-strings)

<!-- /TOC -->

# codewars
Codewars daily challenges

## Simple Pig Latin
June 4th, 2017  

Move the first letter of each word to the end of it, then add 'ay' to the end of the word.
```js
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
```

## Extract the domain name from a URL
May 11th, 2017  

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
```js
domainName("http://github.com/carbonfive/raygun") == "github"
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
```

## Simple fraction to mixed number converter
May 10th, 2017  

Given a string representing a simple fraction `x/y`, your function must return a string representing the corresponding [mixed fraction](https://en.wikipedia.org/wiki/Fraction_%28mathematics%29#Mixed_numbers) in the following format:

`a b/c`

where `a` is integer part and `b/c` is irreducible proper fraction. There must be exactly one space between `a` and `b/c`.

If the `x/y` equals the integer part, return integer part only. If integer part is zero, return the irreducible proper fraction only. In both of these cases, the resulting string must not contain any spaces.

Division by zero should raise an error (preferably, the standard zero division error of your language).

Value ranges

- -10 000 000 < `x` < 10 000 000
- -10 000 000 < `y` < 10 000 000

Examples:
```js
Input: 42/9, expected result: 4 2/3.
Input: 6/3, expedted result: 2.
Input: 4/6, expected result: 2/3.
Input: 0/18891, expected result: 0.
Input: -10/7, expected result: -1 3/7.
Inputs 0/0 or 3/0 must raise a zero division error.
```
Note

Make sure not to modify the input of your function in-place, it is a bad practice.

## Last digit of a large number
May 9th, 2017  

Define a function
```js
var lastDigit = function(str1, str2){
  // see JavaScript remarks below
}
```
that takes in two numbers `a` and `b` and returns the last decimal digit of `a^b`. Note that `a` and `b` may be very large!

For example, the last decimal digit of `9^7` is `9`, since `9^7 = 4782969`. The last decimal digit of `(2^200)^(2^300)`, which has over `10^92` decimal digits, is `6`.

The inputs to your function will always be non-negative integers.

Examples
```js
lastDigit("4", "1")           //       4 => 4
lastDigit("4", "2")           //      16 => 6
lastDigit("9", "7")           // 4782969 => 9    
lastDigit("10","10000000000") //=> 0
```
Remarks for JavaScript

Since JavaScript doesn't have native arbitrary large integers, your arguments are going to be strings representing non-negative integers, e.g.
```js
lastDigit("10", "10000000000");
```
The kata is still as hard as the variants for Haskell or Python, don't worry.

## Vector class  
May 9th, 2017  

Create a Vector object that supports addition, subtraction, dot products, and norms. So, for example:
```js
var a = new Vector([1,2,3]);
var b = new Vector([3,4,5]);
var c = new Vector([5,6,7,8]);
a.add(b); // should return Vector([4,6,8])
a.subtract(b); // should return Vector([-2,-2,-2])
a.dot(b); // should return 1*3+2*4+3*5 = 26
a.norm(); // should return sqrt(1^2+2^2+3^2)=sqrt(14)
a.add(c); // throws an error
```
If you try to add, subtract, or dot two vectors with different lengths, **you must throw an error!**

Also provide:

- a toString function, so that using the vectors from above, `a.toString() === '(1,2,3)'` (in Python, this is a `__str__` method, so that `str(a) == '(1,2,3)')`
- an equals function, so that two vectors who have the same components are equal

The test cases will utilize the user-provided `equals` method.

## Valid Phone Number
April 23rd, 2017  

Write a function that accepts a string, and returns true if it is in the form of a phone number.
Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

Only worry about the following format:  
`(123) 456-7890 (don't forget the space after the close parentheses)`

Examples:
```js
validPhoneNumber("(123) 456-7890")  =>  returns true
validPhoneNumber("(1111)555 2345")  => returns false
validPhoneNumber("(098) 123 4567")  => returns false
```

## Double Cola
April 22nd, 2017  

Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink vending machine; there are no other people in the queue. The first one in the queue (Sheldon) buys a can, drinks it and doubles! The resulting two Sheldons go to the end of the queue. Then the next in the queue (Leonard) buys a can, drinks it and gets to the end of the queue as two Leonards, and so on.

For example, Penny drinks the third can of cola and the queue will look like this:

`Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny`

Write a program that will return the name of a person who will drink the n-th cola.

Note that in the very beginning the queue looks like that:

`Sheldon, Leonard, Penny, Rajesh, Howard`

Input

The input data consist of an array which contains five names, and single integer n.

`(1 ≤ n ≤ 1000000000).`

Output / Examples

Return the single line — the name of the person who drinks the n-th can of cola. The cans are numbered starting from 1. Please note that you should spell the names like this: "Sheldon", "Leonard", "Penny", "Rajesh", "Howard" (without the quotes). In that order precisely the friends are in the queue initially.
```js
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1)=="Sheldon"
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52)=="Penny"
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951)=="Leonard"
```

## Valid Parenthesis
April 17th, 2017  

Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid.

Examples:
```js
validParentheses( "()" ) => returns true
validParentheses( ")(()))" ) => returns false
validParentheses( "(" ) => returns false
validParentheses( "(())((()())())" ) => returns true
```

All input strings will be nonempty, and will only consist of open parentheses '(' and/or closed parentheses ')'

## Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
April 17th, 2017  

The number `89` is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: `89 = 8^1 + 9^2`

The next number in having this property is `135`.

See this property again: `135 = 1^1 + 3^2 + 5^3`

We need a function to collect these numbers, that may receive two integers `a`, `b` that defines the range `[a, b]` (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases:
```js
sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
```
If there are no numbers of this kind in the range [a, b] the function should output an empty list.
```js
sumDigPow(90, 100) == []
```

## Reverse Words
April 12th, 2017  

Write a `reverseWords` function that accepts a string as a parameter, and reverses each word in the string. Every space should stay, so you cannot use words from Prelude.

Example:
```js
reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"
reverse_words("This is an example!") # returns  "sihT si na !elpmaxe"
```
```js
reverseWords "An example!"    -- "nA !elpmaxe"
reverseWords "double  spaces" -- "elbuod  secaps"
```

## Build a pile of Cubes
April 2nd, 2017

Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb `(find_nb, find-nb, findNb)` will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

Examples:
```js
findNb(1071225) --> 45
findNb(91716553919377) --> -1
```

## Reverse or Rotate
April 2nd, 2017  

The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str is empty return ""  
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

Examples:
```js
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> ""
revrot("563000655734469485", 4) --> "0365065073456944"
```

## IQ Test
March 10th, 2017  

Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

Examples :
```js
iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
```

## Vowel Count
March 10th, 2017  

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

## Find the next perfect square!
March 9th, 2017  

You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.

Examples:
```js
findNextSquare(121) --> returns 144  
findNextSquare(625) --> returns 676  
findNextSquare(114) --> returns -1 since 114 is not a perfect  
```

## Duplicate Encoder
March 9th, 2017  

The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples:
```js
"din" => "((("

"recede" => "()()()"

"Success" => ")())())"

"(( @" => "))(("
```

## Jaden Case Strings
March 8th, 2017  

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:
```js
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
```
