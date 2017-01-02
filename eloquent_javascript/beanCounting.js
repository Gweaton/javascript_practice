var countBs = function(string) {
  var count = 0;
  for (var i = 0; i <= string.length; i++) {
    if (string.charAt(i) === "B") {
      count += 1;
    }
  }
  return count;
}

var countChars = function(string, character) {
  var count = 0;
  for (var i = 0; i <= string.length; i++) {
    if (string.charAt(i) === character) {
      count += 1;
    }
  }
  return count;
}
