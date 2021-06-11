function handleWhenKeyIsPressedAndYouOnlyWantItToHappenOnce() {
  // console.log(keyCode)
  switch (keyCode) {
    case _KEYS.UP_ARROW:
      // fireBullet(player2, bullet2)
      if (player1.bomb > 0) {
        newBomb(player1)
      }
      break
    case _KEYS.DOWN_ARROW:
      for (var i = 0; i < bombs.length; i++) {
        explodeBomb(bombs[i])
      }
      bombs = []
      break
    case _KEYS.LEFT_ARROW:
      turnLeft()
      break
    case _KEYS.RIGHT_ARROW:
      turnRight()
      break
  }
}

function handleFiringInput() {
  if (keyIsDown(_KEYS.F)) {
    if (player1.ammo > 0) {
      fireNewBullet(player1)
    }
  }
}

function handleMovementInput() {
  if (keyIsDown(_KEYS.W)) {
    if (player1.y > player1.s / 2) {
      moveForward()
    }
  } else if (keyIsDown(_KEYS.A)) {
    if (player1.x > player1.s / 2) {
      moveLeft()
    }
  } else if (keyIsDown(_KEYS.D)) {
    if (player1.x < 1000 - player1.s / 2) {
      moveRight()
    }
  } else if (keyIsDown(_KEYS.S)) {
    if (player1.y < 1000 - player1.s / 2) {
      moveBackward()
    }
  }
}

function fireNewBullet(player) {
  player1.ammo = player1.ammo - 1
  var bullet = createBulletModel(player, -50)
  bullets.push(bullet)
}

function newBomb(player) {
  player1.bomb = player1.bomb - 1
  var bomb = createBombModel(player, -50)
  bombs.push(bomb)
}

function explodeBomb(bomb) {
  for (var i = 0; i < 36; i++) {
    var bullet = createBulletModel(bomb, 10)
    bullets.push(bullet)
    bomb.o += 10
  }
}

function moveForward() {
  player1.y = player1.y - player1.sp
}

function moveBackward() {
  player1.y = player1.y + player1.sp
}

function moveLeft() {
  player1.x = player1.x - player1.sp
}

function moveRight() {
  player1.x = player1.x + player1.sp
}

function turnLeft() {
  player1.o = player1.o - 45
}

function turnRight() {
  player1.o = player1.o + 45
}

function keyPressed() {
  if (gameStatus == "started") {
    if (player1.health > 0) handleWhenKeyIsPressedAndYouOnlyWantItToHappenOnce()
  } else if (gameStatus == "opening" && keyCode == _KEYS.E) {
    gameStatus = "instruction"
  } else if (gameStatus == "instruction" && keyCode == _KEYS.ESC) {
    gameStatus = "opening"
  } else if (gameStatus == "opening" && keyCode == _KEYS.ENTER) {
    gameStatus = "started"
  } else if (gameStatus == "gameOver" && keyCode == _KEYS.ENTER) {
    gameStatus = "restart"
  }
}
