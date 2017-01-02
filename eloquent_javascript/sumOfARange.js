var range = function(start, end, step = 1) {
  var numbers = [];
  for (var i = start; i <= end; i += step) {
    numbers.push(i);
  }
  return(numbers);
}

var sum = function(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return(total);
}
