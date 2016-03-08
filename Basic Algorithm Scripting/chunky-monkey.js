
/*  RECURSIVE FUNCTIONAL SOLUTION  */

function chunk(arr, size) {
  
  if (arr.length <= size) {
    return [arr];
  } else {
    return [arr.slice(0, size)].concat(chunk(arr.slice(size), size));
  }
  
}



/*  IMPERATIVE SOLUTION (minimal argument check in the begining is just me playing around) */ */

//function chunk(arr, size) {
//
//  if (!size || size < 1) {
//    throw new Error('Function chunk(array, size) expects argument "size" to be an integer greater than or equal to 1.');
//  }
//
//  var arrLength = arr.length,
//    numberOfCompleteArrays = Math.floor(arrLength / size),
//    remainder = arrLength % size,
//    i = 0,
//    chunkedArray = [];
//
//  for (; i < numberOfCompleteArrays; i++) {
//    chunkedArray.push(arr.slice(size * i, size * (i + 1)));
//  }
//  if (remainder) {
//    chunkedArray.push(arr.slice(-remainder));
//  }
//  return chunkedArray;
//
//}

  
  
/*  RECURSIVE FUNCTIONAL SOLUTION WITH (the all so robust!) ARGUMENT CHECKING */
  
//function chunk(arr, size) {
//
//  if (!size || size < 1) {
//    throw new Error('Function chunk(array, size) expects argument "size" to be an integer greater than or equal to 1.');
//  }
//
//  function recursiveChunk(a, s) {
//    if (a.length <= s) {
//      return [a];
//    } else {
//      return [a.slice(0, s)].concat(recursiveChunk(a.slice(s), s));
//    }
//  }
//
//  if (arr.length <= size) {
//    return [arr];
//  } else {
//    return [arr.slice(0, size)].concat(recursiveChunk(arr.slice(size), size));
//  }
//
//}


chunk([0, 1, 2, 3, 4, 5], 4);
//chunk(["a", "b", "c", "d"], 2);
