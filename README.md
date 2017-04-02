<!-- TOC depthFrom:2 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

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
