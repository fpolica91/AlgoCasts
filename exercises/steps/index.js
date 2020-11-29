// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


//if row is equal to n end of problem


function steps(n, row = 0, stair='') {

  // first time around n = 3; row =0; stair =''
  // is 3 = 0 false
  // is 3 === 0 false
  // is 0 === 0 true -> add # to stair

  // 2nd time =========///
  // steps(3, 0, "#")
  // is 3 === 0 false
  // is 3 === 1 false
  // is 1 === 0 false
  // add space

   // 3nd time =========///
    //  steps(3, 0, "# ")
    // is n === 0 false
    // n === 2 false
    // is 2 <= 0 false
    // add space



 // 4th time =========///
 // 3 ===0 false
 // 3 === 3 true -> console.log("#  ")
 // return steps(3, 1, "")

 // this repeats until eventually row is 3 

  
  if(n === row) return;

  if(n === stair.length) {
    console.log(stair)
   return steps(n, row +1)
  }
  if(stair.length <= row){

    stair += "#"
  } else{
    stair += ' '
  }
  steps(n, row, stair)
}

module.exports = steps;
