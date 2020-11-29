// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// // chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
// Create an empty array to hold the chunks called chunked_arr
// Iterate through the given array, for each element in the given array
//    Pull out the last element of the chunked_arr (a chunk)
//    If the last element does not exist or its size is equal to size
//        Push a new chunk into the chunked_arr with the current element
//    Else add the current element into the chunk


// function chunk(array, size) {
//   const chunked_arr = [];
//   for (let i = 0; i < array.length; i++) {
//     const last = chunked_arr[chunked_arr.length - 1];
//     if (!last || last.length === size) {
//       chunked_arr.push([array[i]]);
//     } else {
//       last.push(array[i]);
//     }
//   }
//   return chunked_arr;
// }


function chunk(array, size) {
  // empty array
  const chunk_array = []
  for(let i =0; i < array.length; i++){
    // last index in empty array
    let last = chunk_array[chunk_array.length - 1]
    console.log(last, size, chunk_array)
    // below if it does not exist or if it already is of maximum size, for example if size is 2 and we have [2,3] then the maximum size for sub array is reached.
    if(!last || last.length === size) chunk_array.push([array[i]])
    else last.push(array[i]) 
  }
  return chunk_array
}

module.exports = chunk;
