import Block from "./block.js";

const BLOCK_WIDTH = 30;
const BLOCK_HEIGHT = 20;
const OFFSET_X = 30;
const OFFSET_Y = 10;
const PADDING = 2;

class BlockGrid {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.blocks = [];

    for (let row = 0; row < this.rows; row++) {
      this.blocks[row] = [];
      for (let col = 0; col < this.cols; col++) {
        const x = OFFSET_X + col * (BLOCK_WIDTH + PADDING);
        const y = OFFSET_Y + row * (BLOCK_HEIGHT + PADDING);
        this.blocks[row][col] = new Block(x, y, BLOCK_WIDTH, BLOCK_HEIGHT);
      }
    }
  }
}

export default BlockGrid;
