class Block {
  constructor(x, y, width, height, color = "#0095DD", life = 1) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.life = life;
  }
}

export default Block;
