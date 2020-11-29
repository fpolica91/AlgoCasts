// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/**
 * 
 * @param {
 *  1. Create an object where the key is the char and the value is the number of times it is found
 *  to solve, create an empty object with no keys.
 *  if an instance of the current item in the string is not found set it to 1, this would be the first time we see that letter
 *  if an instance of the letter exist then simply increment counter
 * 
 * 2. Iterate over newly created object and find the key with the most value
 * 
 * } str we iterate over string 
 */

function maxChar(str) {
  const chars = {}
  let max = 0
  let max_char = ''


  for(let char of str){
    if(!chars[char]){
      chars[char] = 1;
    }
    chars[char]++
  }

  for(let char in chars){
    if(chars[char] > max){
      max = chars[char]
      max_char = char
    }
  
  }
  return max_char
}

module.exports = maxChar;
