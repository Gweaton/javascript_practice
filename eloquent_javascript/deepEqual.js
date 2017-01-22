function deepEqual(a, b) {
  if (isObject(a) && isObject(b)) {
    if (objectLength(a) != objectLength(b)) {
      return false;
    } else {
      for (var property in a) {
        if (b.hasOwnProperty(property) === false) {
          return false;
        } else {
          return deepEqual(a[property], b[property]);
        }
      }
    }
  } else {
    return a === b
  }
}
