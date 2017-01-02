var isEven = function(number) {

  if (number === 0) {
    return true;
  }
  else if (number === 1) {
    return false;
  }
  else {
    if (isEven(number - 2) === true) {
      return true;
    } else {
      return false;
    }
  }
}
