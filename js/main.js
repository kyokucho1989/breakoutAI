import Ball from "./ball.js";
import Paddle from "./paddle.js";
import Renderer from "./renderer.js";
import Game from "./game.js";
import BlockGrid from "./blockGrid.js";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const renderer = new Renderer(ctx);
const balls = [new Ball(canvas.width / 2, canvas.height - 30, 2, -2)];
const paddle = new Paddle((canvas.width - 75) / 2, canvas.height - 10);
const game = new Game(canvas, ctx);
const blockGrid = new BlockGrid(3, 12);

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  game.handlePaddleMovement(paddle);

  balls.forEach((ball) => {
    ball.update();
    ball.checkWallCollision(canvas.width, canvas.height);
    game.checkBallPaddleCollision(ball, paddle);
    game.checkGameOver(ball, canvas.height, paddle);
  });

  renderer.renderBlocks(blockGrid);
  renderer.render(balls, paddle);
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
