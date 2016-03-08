
//  We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
//
//  The lowest number will not always come first.
//
//  sumAll([1, 4]) should return a number.
//  sumAll([1, 4]) should return 10.
//  sumAll([4, 1]) should return 10.
//  sumAll([5, 10]) should return 45.
//  sumAll([10, 5]) should return 45.


// MATHEMTICAL SOLUTION

function sumAll(arr) {    
  return (arr[0] + arr[1]) * (Math.abs(arr[1] - arr[0]) + 1) / 2;
}

sumAll([1, 4]);


//  RECURSIVE SOLUTION (adressing the case when arr[0] === arr[1])
//
//  function sumAll(arr) {
//
//    if (arr[0] === arr[1]) {
//      return arr[0] + arr[1];
//    }
//
//    arr.sort((a, b) => {return a - b;});
//
//    function sumLower(a) {
//      return (a[0] === a[1]) ? a[1] : a[0] + sumLower([a[0] + 1, a[1]]);
//    }
//
//    return sumLower(arr);  
//
//  }


//  OTHER RECURSIVE SOLUTION (adressing the case when arr[0] === arr[1])
//  not working! RangeError: Maximum call stack size exceeded
//
//  function sumAll(arr) {
//
//    if (arr[0] === arr[1]) {
//      return arr[0] + arr[1];
//    }
//
//    arr.sort((a, b) => {
//      return a - b;
//    });
//
//    function arrLengthIsEven(a) {
//      return (a.length % 2) ? false : true;
//    }
//
//    function sumLowestAndHighest(a) { // assumes array argument has odd # of elements
//      return (a[0] === a[1]) ? a[0] : a[0] + a[1] + sumLowestAndHighest([a[0] + 1, a[1] - 1]);
//    }
//
//    if (arrLengthIsEven(arr)) {
//      arr.unshift(0); // make sure arr has odd # of elements
//    }
//
//    return sumLowestAndHighest(arr);
//
//  }
