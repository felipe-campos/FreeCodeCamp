function titleCase(str) {

  var wordsArray = str.split(/\s+/);
  var titleCasedWordsArray = wordsArray.map(function (word) {
    var firstLetter = word[0].toUpperCase();
    if (word.length === 1) {
      return firstLetter;
    } else {
      return firstLetter + word.slice(1).toLowerCase();
    }
  });

  return titleCasedWordsArray.join(' ');
  
}

titleCase("I'm a little tea pot");




/*
function calleeTest(x,y) { 
  var aux1 = "aux1",
      aux2 = 2;
  console.log('arguments.callee.y = ' + arguments.callee[y] + '\n');
  console.log('arguments.callee.aux1 = ' + arguments.callee.aux1 + '\n');
  console.log('arguments.callee.aux2 = ' + arguments.callee.aux2 + '\n');

  console.log('\n\t\t&\n');

  for (var i = 0, len = x.length; i < len; i++) {
    arguments.callee[x[i]] = x[i] * 10;
    console.log('arguments.callee.' + x[i] + ' = ' + i + ' x 10 = ' + arguments.callee[x[i]] + '\n');
  }
  return 'voilà';
}

function findLongestWord(str) {
  
  // 1- let's make an array containing the words of the string argument
  //    >> use String.split()
  
  // 2- I considered  strings like "awe-inspiring" and "O’Brian" as one word
  //    but haven't addressed accents
  //    >> hence, split string argument if character isn't: abc...yz  OR
  //    ABC...YZ  OR -  OR '  OR  ’  (quite arbitrarily, I know...)
  
  // 3- poor use of RegExp results in array filled with empty strings due
  //    to punctuation + whitespace + EOL etc.
  //    >> instead of improving RegExp at this point, I decided to use the 
  //    allready learnt filter array method to address this problem
  
  // 4- just have to pick the longest string item in the array
  //    >> chose to sort the array based on its string items' lengths
  
  var wordsArr = str.split(/[^a-zA-z-'’]/g).filter(function(v) {
    return Boolean(v);
  });
  
  wordsArr.sort(function(s1, s2) {
    return s2.length - s1.length;      // longest first
  });
  
  return wordsArr[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");






function titleCase(str) {
  
  
  var regexp = /(?:\b)|(?:'’)([a-z]){1}/g;
  var titleCasedWord = \1.toUpperCase();
  var aux = str.trim().replace(regexp, titleCasedWord);
  
  
  return str;
}

titleCase("I'm a little tea pot");
*/

/* variaveis já declaradas no terminal online
var s = "Teste do felipe.",
    regexp = /(?:\b)([a-z])elipe(?:\b)|(?:[\.\?\!\:\,\;])/;

var t1 = s.replace(regexp, function(strMatched) {
  return strMatched.toUpperCase();
});

//var t1 = s.replace(regexp, ("$1" + "").toUpperCase() + 'elipe');
*/

/* código acima sem as declarações, para fins de teste
s = "Teste do felipe.";
//regexp = /(?:\b)([a-z])(elipe)(?:\b)|(?:[\.\?\!\:\,\;])/;
regexp = /(?:\b)([a-z])(elipe)(?:\b|[\.\?\!\:\,\;\…])/;


t1 = s.replace(regexp, function(strMatched,p1,p2) {
  return p1.toUpperCase() + p2;
});
*/


function titleCase(str) {
  
  // var regexp = /(?:\b['"‘“\-–—])([a-z])(?:\b|[\.\,\?\!\;\:\…\¡\¿])/g,
  // var regexp = /(?:\b)|(?:[-–—])|(["‘“])([a-zA-Z])(['’]?[a-zA-Z]*)(?:\b|[\.\,\?\!\;\:\…\¡\¿])/g;
  //var regexp = /(?:\b)|(?:[-–—"‘“])([a-zA-Z])(['’]?[a-zA-Z]*)(?:\b|[\.\,\?\!\;\:\…\¡\¿"’”])/g;
  var regexp = /\s+/;
  //    strLower = str.trim().toLowerCase();
  /*
  var strTitled = str.replace(regexp, function(matched, p1, p2, p3) {
    console.log(typeof p1 + " , " + typeof p2);
    return p1.toUpperCase() + p2.toLowerCase();
  });
  */
  
  var wordsArray = str.split(regexp);
  var titleCasedWordsArray = wordsArray.map(function(word) {
    //return (word.length === 1) ? word.toUppercase
    //word[0] = word[0].toUpperCase();
    var firstLetter = word[0].toUpperCase();
    if (word.length === 1) {
      return firstLetter;
    } else {
      return firstLetter + word.slice(1).toLowerCase();
    }
    
  });
  
  return titleCasedWordsArray.join(' ');
}

titleCase("I'm a little tea pot");









