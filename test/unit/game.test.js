import Game from "../../js/game.js";
import Ball from "../../js/ball.js";
import Block from "../../js/block.js";

describe("ブロックとボールの衝突", () => {
  let canvas, ctx, game;

  beforeEach(() => {
    // Canvas要素をモック
    canvas = { width: 800, height: 600 };
    ctx = {}; // 描画しないので空オブジェクト
    game = new Game(canvas, ctx);
  });

  test("ボールがブロックに当たるとlifeが0になる", () => {
    // ブロックを作成（位置: x=100, y=100, サイズ: 75x20）
    const block = new Block(100, 100, 75, 20);

    // ボールを作成（ブロックの中心に配置して衝突させる）
    const ball = new Ball(137.5, 110, 2, 2); // ブロックの中心付近

    // BlockGridをモック（1つのブロックだけ持つ）
    const blockGrid = {
      blocks: [[block]],
    };

    // 衝突前の確認
    expect(block.life).toBe(1);

    // 衝突判定を実行
    game.checkBlockCollision(ball, blockGrid);

    // 衝突後の確認
    expect(block.life).toBe(0);
  });

  test("ボールがブロックに当たらない場合lifeは変わらない", () => {
    const block = new Block(100, 100, 75, 20);
    const ball = new Ball(300, 300, 2, 2); // ブロックから離れた位置

    const blockGrid = {
      blocks: [[block]],
    };

    expect(block.life).toBe(1);
    game.checkBlockCollision(ball, blockGrid);
    expect(block.life).toBe(1); // 変わらない
  });

  test("複数のブロックがある場合、当たったブロックだけlifeが0になる", () => {
    const block1 = new Block(100, 100, 75, 20);
    const block2 = new Block(200, 100, 75, 20);
    const block3 = new Block(100, 150, 75, 20);

    // block1の中心にボールを配置
    const ball = new Ball(137.5, 110, 2, 2);

    const blockGrid = {
      blocks: [[block1], [block2], [block3]],
    };

    // 衝突前の確認
    expect(block1.life).toBe(1);
    expect(block2.life).toBe(1);
    expect(block3.life).toBe(1);

    // 衝突判定を実行
    game.checkBlockCollision(ball, blockGrid);

    // block1だけstatusが0になる
    expect(block1.life).toBe(0);
    expect(block2.life).toBe(1);
    expect(block3.life).toBe(1);
  });

  test("すでにlife=0のブロックには衝突判定しない", () => {
    const block = new Block(100, 100, 75, 20);
    block.life = 0; // すでに破壊済み

    const ball = new Ball(137.5, 110, 2, 2);

    const blockGrid = {
      blocks: [[block]],
    };

    // ボールの速度を記録
    const originalDx = ball.dx;
    const originalDy = ball.dy;

    // 衝突判定を実行
    game.checkBlockCollision(ball, blockGrid);

    // 破壊済みブロックには反応しないので、ボールの速度は変わらない
    expect(ball.dx).toBe(originalDx);
    expect(ball.dy).toBe(originalDy);
    expect(block.life).toBe(0); // statusも変わらない
  });
});

describe("ブロックの初期化", () => {
  test("ブロックは初期状態でlife=1を持つ", () => {
    const block = new Block(100, 100, 75, 20);
    expect(block.life).toBe(1);
  });
});
