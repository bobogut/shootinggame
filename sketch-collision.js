function checkCollision() {
  var bulletsToBeRemoved = []
  for (var i = 0; i < bullets.length; i++) {
    var b = bullets[i]
    if (collided(b, player1)) {
      player1.health--
      bulletsToBeRemoved.push(b)
    }
  }

  for (var i = 0; i < bullets.length; i++) {
    var b = bullets[i]
    for (var j = 0; j < enemies.length; j++) {
      var e = enemies[j]
      if (collided(b, e)) {
        e.health--
        bulletsToBeRemoved.push(b)
        if (e.health < 1) {
          removeItemById(enemies, e)
          if (e.sp > 1) {
            console.log("bob")
            var lootFromEnemy = rand(3)
            if ((lootFromEnemy = 1)) {
              player1.ammo = player1.ammo + rand(25)
            } else if ((lootFromEnemy = 2)) {
              player1.bomb = player1.bomb + rand(5)
            } else player1.ammo = player1.ammo + rand(25)
            player1.bomb = player1.bomb + rand(5)
          }
          player1.score++
        }
        break
      }
    }
  }

  for (var i = 0; i < enemies.length; i++) {
    if (collided(enemies[i], player1)) {
      player1.health--
      // enemies[i].health--
      // if (enemies[i].health < 1) {
      // player1.score++
      // removeItemById(enemies, enemies[i])
      // }
    }
  }

  for (var i = 0; i < enemies.length; i++) {}
  if (bulletsToBeRemoved.length > 0) {
    bullets = removeBullets(bullets, bulletsToBeRemoved)
  }
}

function removeBullets(bullets, bulletsToBeRemoved) {
  // var bulletsAfterRemoval = bullets.filter(function (b) {
  //   return bulletsToBeRemoved.findIndex((e) => e.id === b.id) < 0
  // })
  var bulletsAfterRemoval = []

  for (var i = 0; i < bullets.length; i++) {
    var b = bullets[i]

    var shouldKeepBullet = true
    for (var j = 0; j < bulletsToBeRemoved.length; j++) {
      var bToBeRemoved = bulletsToBeRemoved[j]
      if (b.id == bToBeRemoved.id) {
        shouldKeepBullet = false
        break
      }
    }
    if (shouldKeepBullet) bulletsAfterRemoval.push(b)
  }

  return bulletsAfterRemoval
}
