var board = ""

var size = 8

for (var i = 0; i < size; i++) {
  for (var j = 0; j < (size / 2) ; j++) {
    board += "# "
  }
  if (i % 2 === 0) {
    board += "\n "
  } else {
    board += "\n"
  }

}

console.log(board);
