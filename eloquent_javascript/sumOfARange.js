function range(start, end, step = 1) {
  var result = [];
  if (step > 0) {
    for (i = start; i <= end; i += step) {
      result.push(i)
    }
  } else {
    for (i = start; i >= end; i += step) {
      result.push(i)
    }
  }
  return result;
}

function sum(array) {
  var result = 0;
  for (i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}
