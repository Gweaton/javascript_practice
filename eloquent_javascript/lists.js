function arrayToList(array) {
  var list = null;
  for (i = array.length-1; i >= 0; i--) {
    list = { value: array[i], rest: list}
  }
  return list;
};

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(element, list) {
  var newList = { value: element, rest: list}
  return newList;
}

function nth(list, number) {
  if (number === 0) {
    return list.value;
  } else {
    return nth(list.rest, number - 1)
  }
}
