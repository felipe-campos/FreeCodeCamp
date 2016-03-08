
function mutation(arr) {

  var arr2 = arr.join('#').toLowerCase().split('#'), // ignore case
    len = arr[1].length,
    o = {};  // object will store already searched letters as properties

  for (var i = 0; i < len; i++) {
    if (o[arr2[1][i]]) {  // if letter was already searched, don’t search again
      continue;
    }
    if (arr2[0].indexOf(arr2[1][i]) === -1) {
      return false;
    } else {
      o[arr2[1][i]] = true;  // store searched letter
    }
  }

  return true;

}


// SIMPLE SOLUTION
//
//function mutation(arr) {
//
//  var arr2 = arr.join('#').toLowerCase().split('#'), // ignore case
//    len = arr[1].length;
//
//  for (var i = 0; i < len; i++) {
//    if (arr2[0].indexOf(arr2[1][i]) === -1) {
//      return false;
//    }
//  }
//
//  return true;
//
//}



mutation(["hello", "hey"]);