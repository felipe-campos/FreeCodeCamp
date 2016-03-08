function end(str, target) {

  var strLength = str.length,
    targetLength = target.length;

  if (targetLength > strLength) // probably unnecessary check
    return false;
  else
    return target === str.slice(-targetLength);

}

end("Bastian", "n");