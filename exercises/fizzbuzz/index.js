// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz
// function fizzBuzz(n) {
//   if(n <= 0) return;
//   if(n % 3 === 0 && n % 5 !==0) {
//     console.log('fizz')
//   } 
//   else if(n % 5 === 0 && n % 3 !==0){
//     console.log('buzz')
//   }
//   else if(n % 3 === 0 && n % 5 === 0) {
//     console.log("fizzBuzz")
//   }
//   else console.log(n)
//   fizzBuzz(n -1)
// }

/**
 * 
 * @param {
 *   we say if n =0 return, this is break statement
 *   print according to condition
 *   call function recursively substracting a number to at some pointt meet our break condition
 * } n  
 */

function fizzBuzz(n) {
  if(n < 1) return;

  
  
  else if(n % 3 === 0 && n % 5 !==0) {
    console.log('fizz')
  } 
  else if(n % 15 === 0){
    console.log("fizzbuzz")
  }
  else if(n % 5 === 0 && n % 3 !==0) {
    console.log('buzz')
  }

  else if(n === 1) console.log(1)

  else {
    console.log(n)
   }
  

   fizzBuzz(n -1)
 
}

module.exports = fizzBuzz;
