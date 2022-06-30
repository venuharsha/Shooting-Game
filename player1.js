class Player1 {
  constructor(x, y, w, h, c, health) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
    this.health = health;
  }

  draw() {
    canvasContext.fillStyle = this.c;
    canvasContext.fillRect(this.x, this.y, this.w, this.h, this.health);
  }
}
