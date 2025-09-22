import Block from "./block.js";

const ROWS = 5;
const COLS = 8;
const BLOCK_HEIGHT = 20;
const OFFSET_X = 30;
const OFFSET_Y = 10;
const PADDING = 2;

class BlockGrid {
  constructor(canvas) {
    this.canvas = canvas;
    this.blocks = [];

    // キャンバス幅からブロック幅を計算
    const availableWidth = this.canvas.width - (OFFSET_X * 2);
    const totalPadding = (COLS - 1) * PADDING;
    const blockWidth = (availableWidth - totalPadding) / COLS;

    for (let row = 0; row < ROWS; row++) {
      this.blocks[row] = [];
      for (let col = 0; col < COLS; col++) {
        const x = OFFSET_X + col * (blockWidth + PADDING);
        const y = OFFSET_Y + row * (BLOCK_HEIGHT + PADDING);
        this.blocks[row][col] = new Block(x, y, blockWidth, BLOCK_HEIGHT);
      }
    }
  }
}

export default BlockGrid;
