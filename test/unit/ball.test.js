import Ball from "../../js/ball.js";
import "@testing-library/jest-dom";

describe("Ball class", () => {
  describe("checkWallCollision", () => {
    test("left wall collision reverses x velocity", () => {
      const ball = new Ball(10, 100, -5, 2);
      ball.checkWallCollision(800, 600);
      expect(ball.dx).toBe(5);
    });

    test("right wall collision reverses x velocity", () => {
      const ball = new Ball(790, 100, 5, 2);
      ball.checkWallCollision(800, 600);
      expect(ball.dx).toBe(-5);
    });

    test("top wall collision reverses y velocity", () => {
      const ball = new Ball(400, 10, 2, -5);
      ball.checkWallCollision(800, 600);
      expect(ball.dy).toBe(5);
    });

    test("no collision maintains velocity", () => {
      const ball = new Ball(400, 300, 3, 4);
      ball.checkWallCollision(800, 600);
      expect(ball.dx).toBe(3);
      expect(ball.dy).toBe(4);
    });

    test("bottom wall collision returns true (game over)", () => {
      const ball = new Ball(400, 590, 2, 5);
      const isBottomCollision = ball.checkWallCollision(800, 600);
      expect(isBottomCollision).toBe(true);
    });

    test("non-bottom collisions return false", () => {
      const ball = new Ball(10, 100, -5, 2);
      const isBottomCollision = ball.checkWallCollision(800, 600);
      expect(isBottomCollision).toBe(false);
    });

    test("corner collision reverses both velocities", () => {
      const ball = new Ball(10, 10, -3, -4);
      ball.checkWallCollision(800, 600);
      expect(ball.dx).toBe(3);
      expect(ball.dy).toBe(4);
    });

    test("collision detection considers ball radius", () => {
      const ball = new Ball(15, 100, -2, 3, 5);
      ball.checkWallCollision(800, 600);
      expect(ball.dx).toBe(2);
    });
  });

  describe("constructor", () => {
    test("initializes with default values correctly", () => {
      const ball = new Ball(100, 200, 3, 4);
      expect(ball.x).toBe(100);
      expect(ball.y).toBe(200);
      expect(ball.dx).toBe(3);
      expect(ball.dy).toBe(4);
      expect(ball.radius).toBe(10);
      expect(ball.color).toBe("#0095DD");
    });

    test("initializes with custom values correctly", () => {
      const ball = new Ball(50, 75, 2, -3, 15, "#FF0000");
      expect(ball.x).toBe(50);
      expect(ball.y).toBe(75);
      expect(ball.dx).toBe(2);
      expect(ball.dy).toBe(-3);
      expect(ball.radius).toBe(15);
      expect(ball.color).toBe("#FF0000");
    });
  });

  describe("update", () => {
    test("updates position by velocity amount", () => {
      const ball = new Ball(100, 200, 3, -4);
      ball.update();
      expect(ball.x).toBe(103);
      expect(ball.y).toBe(196);
    });
  });
});
