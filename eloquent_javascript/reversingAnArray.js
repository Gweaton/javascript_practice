var reverseArray = function(array) {
  var reversedArray = [];
  for (i = array.length - 1; i >= 0 ; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}
