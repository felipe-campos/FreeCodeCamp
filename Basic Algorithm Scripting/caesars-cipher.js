function rot13(str) { // LBH QVQ VG!

  var lRot13 = 23;

  return str.replace(/[A-Z]/g, function (letter) {

    lRot13 = letter.charCodeAt(0) + 13;

    // String.fromCharCode(90) = Z
    lRot13 = (lRot13 < 91) ? lRot13 : lRot13 - 26;

    return String.fromCharCode(lRot13);

  });


}

// Change the inputs below to test
rot13("SERR PBQR PNZC");