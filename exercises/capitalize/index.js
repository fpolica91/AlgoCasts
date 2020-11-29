// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/**
 * 
 * @param {
 *  1. split string into array
 *  2. create empty array to push result
 *  3. iterate over array of words
 * } str 
 */

function capitalize(str) {
  let words = []
  for(word of str.split(' ')){
    words.push(word[0].toUpperCase() +  word.slice(1))
  }
  return words.join(' ')
} 

module.exports = capitalize;
