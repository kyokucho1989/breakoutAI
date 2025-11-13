class Renderer {
  constructor(ctx) {
    this.ctx = ctx;
  }

  render(balls, paddle) {
    balls.forEach((ball) => this.renderBall(ball));
    if (paddle) {
      this.renderPaddle(paddle);
    }
  }

  renderBall(ball) {
    this.ctx.beginPath();
    this.ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = ball.color;
    this.ctx.fill();
    this.ctx.closePath();
  }

  renderPaddle(paddle) {
    this.ctx.beginPath();
    this.ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height);
    this.ctx.fillStyle = paddle.color;
    this.ctx.fill();
    this.ctx.closePath();
  }

  renderBlocks(blockGrid) {
    blockGrid.blocks.forEach((blockRow) => {
      blockRow.forEach((block) => {
        if (block.life !== 0) {
          this.renderBlock(block);
        }
      });
    });
  }
  renderBlock(block) {
    this.ctx.beginPath();
    this.ctx.rect(block.x, block.y, block.width, block.height);
    this.ctx.fillStyle = block.color;
    this.ctx.fill();
    this.ctx.closePath();
  }
}

export default Renderer;
