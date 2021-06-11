function updatePositions() {
  var lastBulletIndex = -1
  for (var i = 0; i < bullets.length; i++) {
    var b = bullets[i]

    b.x = moveX(b)
    b.y = moveY(b)

    if (b.traveled() > b.range) lastBulletIndex = i
  }

  if (lastBulletIndex >= 0) bullets.splice(0, lastBulletIndex + 1)

  // enemies array

  for (var i = 0; i < enemies.length; i++) {
    var e = enemies[i]

    // if (player1.x > e.x) e.x = e.x + e.sp
    // else e.x = e.x - e.sp
    // if (player1.y > e.y) e.y = e.y + e.sp
    // else e.y = e.y - e.sp

    //   var oldX = e.x
    //   var oldY = e.y
    e.x = e.x + e.sp * (player1.x > e.x ? 1 : -1)
    e.y = e.y + e.sp * (player1.y > e.y ? 1 : -1)

    for (var j = 0; j < enemies.length; j++) {
      var e2 = enemies[j]
      if (e.id === e2.id) continue

      if (collided(e2, player1)) {
        player1.health = player1.health - 0.5
      }

      if (collided(e, e2) || collided(player1, e2)) {
        e2.x = e2.x + rand(10) - rand(10)
        e2.y = e2.y + rand(10) - rand(10)
        // e2.x = e2.x - rand(10)
        // e2.y = e2.y - rand(10)
      }

      // if (collided(e, e2) || collided(player1, e2)) {
      // var randomNumber = rand(4)
      // console.log(randomNumber)
      //   if ((randomNumber = 1)) {
      //     e2.x = e2.x + 100
      //   } else if ((randomNumber = 2)) {
      //     e2.x = e2.x - 100
      //   } else if ((randomNumber = 3)) {
      //     e2.y = e2.y + 100
      //   } else e2.y = e2.y - 100
      // break
      // }
    }

    e.m += 0.1
    if (e.m > 1) e.m = 0
  }
}

function moveX(b) {
  return b.x + Math.sin((b.o * Math.PI) / 180) * b.sp
}

function moveY(b) {
  return b.y - Math.cos((b.o * Math.PI) / 180) * b.sp
}
