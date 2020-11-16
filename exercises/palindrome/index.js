// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/**
 * Using recursion we see that the first case is base, if str.length is less or equal to one
 * we return true. We also grab the first and the last letters from the string
 * form example hello, first letter is h and last o, impossible to be a palindrome.
 * if the first and the last words are equal we can continue. 
 * substring removes part of the string in our last example given the code it would remove ell
 * 
 * @param {*} str 
 */



function palindrome(str) {
  if(str.length <=1) return true
  let firstLetter = str[0];
  let lastLetter = str[str.length -1]

  if(firstLetter === lastLetter){
    let stringWithoutFirstAndLastLetters = str.substring(1, str.length -1)
    return palindrome(stringWithoutFirstAndLastLetters)
  }else{
    return false
  }
 
}

module.exports = palindrome;
