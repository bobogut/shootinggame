var gameStatus = "opening"

var bullets = []
var bombs = []
var bulletId = 0

var player1 = {
  type: "player",
  health: 100,
  sp: 6,
  ammo: 500,
  bomb: 10,
  shootingSpeed: 6,
  x: 500,
  y: 500,
  s: 50,
  m: 0,
  o: 0,
  color: "rgba(110, 255, 158, 1)",
  score: 0,
  createPoints: function () {
    return Shape.createPlayer(this)
  },
}

function rand(max) {
  return Math.floor(Math.random() * max)
}

var enemies = []
var enemyId = 0

function createEnemyModel(speed) {
  var x = rand(1000)
  var y = rand(500)

  var r = Math.random()
  if (r < 0.25) y = 1
  else if (r < 0.5) y = 1
  else if (r < 0.75) x = 1
  else x = 1000

  // if (random > 123) x = 999
  // if (random > 12313) y = 999
  var color = speed > 1 ? "rgba(255, 0, 125, 1)" : "rgba(255, 255, 100, 1)"

  var enemy = {
    type: "enemy",
    id: enemyId++,
    health: 5,
    sp: enemySpeed,
    x: x,
    y: y,
    s: 50,
    m: 0,
    o: 0,
    color,
    score: 0,
    createPoints: function () {
      return Shape.createEnemy(this)
    },
  }
  enemies.push(enemy)
}

var apple = {
  type: "apple",
  x: 600 + (0.5 - Math.random()) * 100,
  y: 600 + (0.5 - Math.random()) * 100,
  s: 50,
  color: "rgba(255, 0, 0, 1)",
  createPoints: function () {
    return []
  },
}

// var bullet = createBulletModel(player2, 10)
// bullets.push(bullet)

function createBulletModel(player, d) {
  var r = -(player.o * Math.PI) / 180 // convert degrees to radians

  var xb = player.x + d * Math.sin(r)
  var yb = player.y + d * Math.cos(r)

  bulletId++

  // console.log("bulletId", bulletId)
  return {
    id: bulletId,
    type: "bullet",
    x: xb,
    y: yb,
    x0: xb,
    y0: yb,
    range: 500,

    s: 1,
    o: player.o,
    sp: 10,

    color: "rgba(255, 0, 125, 1)",
    createPoints: function () {
      return Shape.createBullet(this)
    },
    traveled: function () {
      return calcDistance2(this.x0, this.y0, this.x, this.y)
    },
  }
}

function createBombModel(player, d) {
  var r = -(player.o * Math.PI) / 180 // convert degrees to radians

  var xb = player.x + d * Math.sin(r)
  var yb = player.y + d * Math.cos(r)

  return {
    type: "bomb",
    x: xb,
    y: yb,
    x0: xb,
    y0: yb,
    range: 100,

    s: 10,
    o: player.o,
    sp: 1,

    color: "rgba(255, 0, 125, 1)",
    createPoints: function () {
      return Shape.createBomb(this)
    },
  }
}
