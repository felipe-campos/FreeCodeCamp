function destroyer(arr) {

  var otherArguments = Array.prototype.slice.call(arguments, 1);

  return arr.filter(function (arrElement) {
    return !otherArguments.some(function (otherArgument) {
      return arrElement === otherArgument;
    });
  });

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);