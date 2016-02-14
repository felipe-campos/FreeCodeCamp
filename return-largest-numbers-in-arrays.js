function largestOfFour(arr) {

  var arrayOfMax = arr.map(function (value) {
    return (value.sort(function (a, b) {
      return b - a;
    }))[0];
  });

  return arrayOfMax;

}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
