var enemySpeed = 1

function setup() {
  createCanvas(1000, 1000)
  createEnemyModel(enemySpeed)
}

function draw() {
  // handleWhenKeyIsPressedAndYouOnlyWantItToHappenOnce()
  background(0)

  if (gameStatus == "started") {
    gameStuff()
  } else if (gameStatus == "opening") {
    gameOpeningScreen()
  } else if (gameStatus == "instruction") {
    gameInstructionScreen()
  } else if (gameStatus == "gameOver") {
    textAlign(CENTER, CENTER)
    textSize(30)
    text("PRESS ENTER TO GO BACK TO START", width / 2, height / 2)
    text("YOUR SCORE WAS " + player1.score, width / 2, height / 2 + 100)
  } else if (gameStatus == "restart") {
    player1.health = 100
    player1.ammo = 500
    player1.bomb = 10
    player1.score = 0
    enemies = []
    player1.x = 500
    player1.y = 500
    player1.o = 0
    player1.sp = 6
    bombs = []
    bullets = []
    gameStatus = "opening"
  }
}

function gameStuff() {
  player1.sp = player1.health / 20 + 1
  drawPlayers()
  drawEnemies()
  drawBullets()
  drawBombs()
  drawStats()

  checkCollision()
  updatePositions()
  // if (frameCount % 2 === 0)
  handleMovementInput()

  if (player1.health < 100) {
    if (frameCount % (10 * 1) === 0) {
      player1.health = player1.health + 0.5
    }
  }
  if (frameCount % (60 * 1) === 0) {
    // if (enemy.health == 0) {
    // removeEnemies
    // }
    if (enemies.length < 100000000000) createEnemyModel(enemySpeed)
    if (enemySpeed > 1) {
      ifEnemyFast = true
    }
    if (enemySpeed > 1.5) enemySpeed = 0
    enemySpeed += 0.5
  }

  if (frameCount % player1.shootingSpeed === 0) handleFiringInput()

  if (player1.health < 0) gameStatus = "gameOver"
}

function gameOpeningScreen() {
  textSize(30)
  textAlign(CENTER, CENTER)
  fill(235, 255, 255)
  text("PRESS ENTER TO START THE GAME", width / 2, height / 2 - 100)
  text("PRESS E TO SEE INSTRUCTIONS", width / 2, height / 2)
}

function gameInstructionScreen() {
  textSize(30)
  textAlign(CENTER, CENTER)
  fill(235, 255, 255)
  text("W: move forward", width / 2, height / 2 - 300)
  text("A: move left", width / 2, height / 2 - 250)
  text("D: move right", width / 2, height / 2 - 200)
  text("S: move backward", width / 2, height / 2 - 150)
  text("F: fire bullet", width / 2, height / 2 - 100)
  text("UP ARROW: place bomb", width / 2, height / 2 - 50)
  text("DOWN ARROW: explode bomb", width / 2, height / 2)
  text("LEFT ARROW: turn left", width / 2 / height / 2 + 50)
  text("RIGHT ARROW: turn right", width / 2, height / 2 + 50)
  text(
    "If ENEMY BUMPS INTO YOU YOU WILL TAKE DAMAGE",
    width / 2,
    height / 2 + 150
  )
  text(
    "WARNING IF YOU GET HIT BY BULLETS YOU WILL TAKE DAMAGE",
    width / 2,
    height / 2 + 200
  )
  textSize(15)
  text(
    "IF THE ENEMY IS RED IT IS FASTER THAN NORMAL AND YOU WOULD GET BULLETS, BOMBS, OR BOTH IF YOU KILL THEM",
    width / 2,
    height / 2 + 250
  )
  textSize(30)
  text("PRESS ESC TO LEAVE THIS", width / 2, height / 2 + 400)
}
