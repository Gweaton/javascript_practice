function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(vector) {
  return new Vector((this.x += vector.x), (this.y += vector.y))
}

Vector.prototype.minus = function(vector) {
  return new Vector((this.x -= vector.x), (this.y -= vector.y))
}

function sumSquared(x, y) {
  return (x*x) + (y*y)
}

function pythagoras(x, y) {
  return Math.sqrt(sumSquared(x, y));
}

Object.defineProperty(Vector.prototype, 'length', {
  get: function() { return pythagoras(this.x, this.y)
  }
});
