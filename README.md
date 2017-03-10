<!-- TOC depthFrom:2 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Vowel Count](#vowel-count)
- [Find the next perfect square!](#find-the-next-perfect-square)
- [Duplicate Encoder](#duplicate-encoder)
- [Jaden Case Strings](#jaden-case-strings)

<!-- /TOC -->
# codewars
Codewars daily challenges

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

findNextSquare(121) --> returns 144  
findNextSquare(625) --> returns 676  
findNextSquare(114) --> returns -1 since 114 is not a perfect  

## Duplicate Encoder
March 9th, 2017  

The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples:

"din" => "((("

"recede" => "()()()"

"Success" => ")())())"

"(( @" => "))(("

## Jaden Case Strings
March 8th, 2017  

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
