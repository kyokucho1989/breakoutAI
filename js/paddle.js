class Paddle {
  constructor(x, y, width = 75, height = 10, color = "#0095DD") {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.speed = 7;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  moveRight() {
    this.x += this.speed;
  }

  checkBounds(canvasWidth) {
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.x + this.width > canvasWidth) {
      this.x = canvasWidth - this.width;
    }
  }
}

export default Paddle;