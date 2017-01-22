function reverseArray(array) {
  var reversed = [];
  for (i = 0; i < array.length; i++) {
    reversed.unshift(array[i])
  }
  return reversed;
}

function reverseArrayInPlace(array) {
  for (i = 0; i < Math.floor(array.length / 2); i++) {
    var element = array[i]
    array[i] = array[array.length -1 -i]
    array[array.length - 1 - i] = element
  }
}
