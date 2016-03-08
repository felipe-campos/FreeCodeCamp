function where(arr, num) {

  var arrWithNum = arr.concat(num).sort(function(a, b) {
    return a - b;
  });
    
  return arrWithNum.indexOf(num);
  
}

where([40, 60], 50);