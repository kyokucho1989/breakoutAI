class Renderer {
  constructor(ctx) {
    this.ctx = ctx;
  }
  render(balls) {
    balls.forEach((ball) => this.renderSingle(ball));
  }

  renderSingle(ball) {
    this.ctx.beginPath();
    this.ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = ball.color;
    this.ctx.fill();
    this.ctx.closePath();
  }
}

export default Renderer;
