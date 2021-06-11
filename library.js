function drawCharacter(object) {
  var points = object.createPoints()
  var rotatedPoints = rotatePoints(points, object)
  var movedPoints = movePoints(rotatedPoints, object)
  stroke(color(object.color))
  drawShape(movedPoints)
}

// move; {x: 123, y: 2313}
function movePoints(points, { x, y }) {
  var movedPoints = []
  for (var i = 0; i < points.length; i++) {
    movedPoints[i] = {
      x: points[i].x + x,
      y: points[i].y + y,
    }
  }
  return movedPoints
}

function rotatePoints(points, { o }) {
  var r = (o * Math.PI) / 180 // convert degrees to radians
  var rotatedPoints = []
  for (var i = 0; i < points.length; i++) {
    let { x, y } = points[i]
    rotatedPoints[i] = {
      x: x * Math.cos(r) - y * Math.sin(r),
      y: x * Math.sin(r) + y * Math.cos(r),
    }
  }
  return rotatedPoints
}

function rotatePoint(point, { o }) {
  var points = [point]
  var rotatedPoints = rotatePoints(points, o)
  return rotatedPoints[0]
}

function drawShape(points) {
  for (var i = 0; i < points.length; i++) {
    var p1 = points[i]
    var p2 = i == points.length - 1 ? points[0] : points[i + 1]
    line(p1.x, p1.y, p2.x, p2.y)
  }
}

function removeItemById(items, { id }) {
  var itemIdx = -1
  for (var i = 0; i < items.length; i++) {
    var element = items[i]
    if (element.id === id) {
      itemIdx = i
      break
    }
  }

  if (itemIdx >= 0) items.splice(itemIdx, 1)
}

function calcDistance(p1, p2) {
  var a = p2.x - p1.x
  var b = p2.y - p1.y
  var dsquared = a * a + b * b
  return Math.sqrt(dsquared)
}

function calcDistance2(x0, y0, x, y) {
  var a = x - x0
  var b = y - y0
  var dsquared = a * a + b * b
  return Math.sqrt(dsquared)
}

function collided(p1, p2) {
  var d = calcDistance(p1, p2)
  return p1.s + p2.s > 2 * d
}

var _KEYS = {
  ESC: 27,
  ENTER: 13,
  E: 69,

  W: 87,
  A: 65,
  S: 83,
  D: 68,
  F: 70,

  UP_ARROW: 38,
  DOWN_ARROW: 40,
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39,
  SHIFT: 16,

  LEVEL_UP: 67,
}
