function every(array, matcher) {
  for (i = 0; i < array.length; i++) {
    if (matcher(array[i]) === false) return false;
  }
  return true;
};

function some(array, matcher) {
  for (i = 0; i < array.length; i++) {
    if (matcher(array[i]) === true) return true;
  }
  return false;
};
