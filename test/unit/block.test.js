import Block from "../../js/block.js";

describe("ブロックの初期化", () => {
  test("デフォルト値で正しく初期化される", () => {
    const block = new Block(50, 100, 30, 20);
    expect(block.x).toBe(50);
    expect(block.y).toBe(100);
    expect(block.width).toBe(30);
    expect(block.height).toBe(20);
    expect(block.color).toBe("#0095DD");
  });

  test("カスタム値で正しく初期化される", () => {
    const block = new Block(100, 150, 40, 25, "#FF0000");
    expect(block.x).toBe(100);
    expect(block.y).toBe(150);
    expect(block.width).toBe(40);
    expect(block.height).toBe(25);
    expect(block.color).toBe("#FF0000");
  });

});

describe("プロパティ", () => {
  test("座標を変更できる", () => {
    const block = new Block(50, 100, 30, 20);
    block.x = 200;
    block.y = 250;
    expect(block.x).toBe(200);
    expect(block.y).toBe(250);
  });

  test("サイズを変更できる", () => {
    const block = new Block(50, 100, 30, 20);
    block.width = 50;
    block.height = 40;
    expect(block.width).toBe(50);
    expect(block.height).toBe(40);
  });

  test("色を変更できる", () => {
    const block = new Block(50, 100, 30, 20);
    block.color = "#00FF00";
    expect(block.color).toBe("#00FF00");
  });
});