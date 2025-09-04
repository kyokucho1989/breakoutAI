class Ball {
  constructor(x, y, dx, dy, radius = 10, color = "#0095DD") {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
  }

  checkWallCollision(canvasWidth, canvasHeight) {
    if (
      this.x + this.dx > canvasWidth - this.radius ||
      this.x + this.dx < this.radius
    ) {
      this.dx = -this.dx;
    }
    if (this.y + this.dy < this.radius) {
      this.dy = -this.dy;
    }
    return this.y + this.dy > canvasHeight - this.radius;
  }
}

export default Ball;
