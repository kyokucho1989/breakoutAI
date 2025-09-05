class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.rightPressed = false;
    this.leftPressed = false;
    
    this.setupEventListeners();
  }

  setupEventListeners() {
    document.addEventListener("keydown", (e) => this.keyDownHandler(e));
    document.addEventListener("keyup", (e) => this.keyUpHandler(e));
  }

  keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
      this.rightPressed = true;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
      this.leftPressed = true;
    }
  }

  keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
      this.rightPressed = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
      this.leftPressed = false;
    }
  }

  handlePaddleMovement(paddle) {
    if (this.rightPressed) {
      paddle.moveRight();
    } else if (this.leftPressed) {
      paddle.moveLeft();
    }
    paddle.checkBounds(this.canvas.width);
  }
}

export default Game;