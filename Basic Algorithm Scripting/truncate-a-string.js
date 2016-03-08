function truncate(str, num) {

  // It could be more apprpriate make truncate more flexible by doing nothing silently, though
  if (num < 0) {
    throw new Error('Function truncate(s,n) expects argument "n" to be a non-negative integer.');
  }

  var strLength = str.length;
  if (strLength === 0 || num >= strLength) { // the case (num = 0) is implicitly addressed
    return str;
  }

  var strTruncated = num <= 3 ? str.slice(0, num) : str.slice(0, num - 3);

  return strTruncated + '...';
}

truncate("A-tisket a-tasket A green and yellow basket", 11);