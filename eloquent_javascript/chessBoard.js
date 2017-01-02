var board = ""

for (var i = 0; i < 8; i++) {
  for (var j = 0; j < 4; j++) {
    board += "# "
  }
  if (i % 2 === 0) {
    board += "\n "
  } else {
    board += "\n"
  }

}

console.log(board);
