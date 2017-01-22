var reverseArray = function(array) {
  var reversedArray = [];
  for (i = array.length - 1; i >= 0 ; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}

var reverseInPlace = function(array) {
  var reversedArray = [];
  for (i = array.length - 1; i >= 0 ; i--) {
    reversedArray.push(array[i]);
  }
  array = reversedArray;
}
