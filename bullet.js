class Player1Bullet {
  constructor(x, y, w, h, c, ySpeed, power) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
    this.ySpeed = ySpeed;
    this.power = power;
  }

  draw() {
    canvasContext.fillStyle = this.c;
    canvasContext.fillRect(this.x, this.y, this.w, this.h);
  }

  player1BulletMove() {
    this.y -= this.ySpeed;
  }

  outOfBounds() {
    return this.y < 0;
  }
}

class Player2Bullet {
  constructor(x, y, w, h, c, ySpeed, power) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
    this.ySpeed = ySpeed;
    this.power = power;
  }

  draw() {
    canvasContext.fillStyle = this.c;
    canvasContext.fillRect(this.x, this.y, this.w, this.h);
  }

  player2BulletMove() {
    this.y += this.ySpeed;
  }

  outOfBounds() {
    return this.y > 500;
  }
}
