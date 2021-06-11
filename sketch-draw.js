function drawBullets() {
  for (var i = 0; i < bullets.length; i++) {
    var bullet = bullets[i]
    drawCharacter(bullet)
  }
}

function drawBombs() {
  for (var i = 0; i < bombs.length; i++) {
    var bomb = bombs[i]
    drawCharacter(bomb)
  }
}

function drawBonus() {
  // stroke(apple.color)
  // drawShape(translateShape(createTriangle, apple))
}

function drawPlayers() {
  if (player1.health >= 0) {
    drawCharacter(player1)
  }
}

function drawEnemies() {
  // enemies is array
  for (var i = 0; i < enemies.length; i++) {
    var enemy = enemies[i]
    drawCharacter(enemy)
  }
}

function drawStats() {
  textSize(20)
  fill("white")
  text("Ammo: " + player1.ammo, 60, 20)
  text("Health: " + player1.health, 60, 40)
  text("Bombs: " + player1.bomb, 60, 60)
  text("Scores: " + player1.score, 60, 80)
}
