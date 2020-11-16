function reverseInt(n) {
  const x = Math.sign(n)
  let num = ''
  if(n < 0)  n = n * -1
  const number = n.toString()
  for(let i = number.length -1; i >= 0; i--){
    num += number[i]
  }
  const parsed = parseInt(num) * x;
  return parsed
}






module.exports = reverseInt;

