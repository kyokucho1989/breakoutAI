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

  checkBlockCollision(ball, blockGrid) {
    const ROWS = blockGrid.blocks.length;
    const COLS = blockGrid.blocks[0].length;
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        const block = blockGrid.blocks[row][col];
        if (
          ball.y + ball.radius > block.y &&
          ball.y - ball.radius < block.y + block.height &&
          ball.x > block.x &&
          ball.x < block.x + block.width
        ) {
          console.log(`hit:block ${col} ${row}`);
        }
      }
    }
  }

  checkBallPaddleCollision(ball, paddle) {
    if (
      ball.y + ball.radius > paddle.y &&
      ball.x > paddle.x &&
      ball.x < paddle.x + paddle.width
    ) {
      ball.dy = -ball.dy;
      return true;
    }
    return false;
  }

  checkGameOver(ball, height, paddle) {
    if (ball.y > height + paddle.height) {
      alert("game over");
      document.location.reload();
      clearInterval(interval);
    }
  }
}

export default Game;
