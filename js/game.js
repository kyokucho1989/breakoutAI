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

  checkBallCollision(ball, rect) {
    const rectLeft = rect.x;
    const rectRight = rect.x + rect.width;
    const rectTop = rect.y;
    const rectBottom = rect.y + rect.height;

    const ballLeft = ball.x - ball.radius;
    const ballRight = ball.x + ball.radius;
    const ballTop = ball.y - ball.radius;
    const ballBottom = ball.y + ball.radius;

    const corners = [
      { x: rectLeft, y: rectTop },
      { x: rectRight, y: rectTop },
      { x: rectLeft, y: rectBottom },
      { x: rectRight, y: rectBottom },
    ];

    const distances = corners.map((corner) => {
      const dx = ball.x - corner.x;
      const dy = ball.y - corner.y;
      return Math.sqrt(dx * dx + dy * dy);
    });

    const minDistance = Math.min(...distances);

    if (rectLeft < ball.x && ball.x < rectRight) {
      if (
        (rectTop < ballBottom && ballTop < rectTop) ||
        (ballTop < rectBottom && rectBottom < ballBottom)
      ) {
        ball.dy = -ball.dy;
        return true;
      }
    }

    if (ball.y > rectTop && ball.y < rectBottom) {
      if (ballRight > rectLeft && ballLeft < rectRight) {
        ball.dx = -ball.dx;
        return true;
      }
    }

    if (minDistance < ball.radius) {
      ball.dx = -ball.dx;
      ball.dy = -ball.dy;
      return true;
    }

    return false;
  }
  checkBlockCollision(ball, blockGrid) {
    const ROWS = blockGrid.blocks.length;
    const COLS = blockGrid.blocks[0].length;
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        const block = blockGrid.blocks[row][col];
        const hit = this.checkBallCollision(ball, block);
      }
    }
  }

  checkBallPaddleCollision(ball, paddle) {
    const hit = this.checkBallCollision(ball, paddle);
    return hit;
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
