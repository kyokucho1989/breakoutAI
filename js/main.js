import Ball from "./ball.js";
import Renderer from "./renderer.js";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const renderer = new Renderer(ctx);
const balls = [new Ball(canvas.width / 2, canvas.height - 30, 2, -2)];

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  balls.forEach((ball) => {
    ball.update();
    ball.checkWallCollision(canvas.width, canvas.height);
  });
  renderer.render(balls);
}

setInterval(gameLoop, 10);
