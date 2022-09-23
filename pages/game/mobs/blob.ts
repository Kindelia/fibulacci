export class Blob {
  // Image
  private imageElement: HTMLImageElement;
  private readonly imageSrc = "images/mobs/blob.png";
  // Sprite Size PNG
  private readonly spriteWidth: number = 32;
  private readonly spriteHeight: number = 32;
  // Size of the sprite on the canvas
  private readonly width: number = this.spriteWidth;
  private readonly height: number = this.spriteWidth;
  // Position
  private readonly x: number = 0;
  private readonly y: number = 0;
  // Frame
  private readonly minFrame: number = 0;
  private readonly maxFrame: number = 7;
  private frameX: number = 0;
  private readonly frameY: number = 0;
  // Log
  private name: string = "Blob";

  constructor({ x, y, name }: { x: number; y: number; name: string }) {
    this.x = x;
    this.y = y;
    this.name = name;
  }

  draw(context: CanvasRenderingContext2D) {
    this.imageElement = new Image();
    this.imageElement.src = this.imageSrc;

    context.drawImage(
      this.imageElement,
      this.frameX * this.spriteWidth,
      this.frameY * this.spriteHeight,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  drawWithAnimated(context: CanvasRenderingContext2D) {
    this.draw(context);
    this.update();
  }

  update() {
    this.frameX =
      this.frameX <= this.maxFrame ? this.frameX + 1 : this.minFrame;
  }

  log(data: any) {
    console.log(`Name: ${this.name}: ${JSON.stringify(data, null, 4)}`);
  }

  debug() {
    this.log({
      x: this.x,
      y: this.y,
      frameX: this.frameX,
      frameY: this.frameY,
      spriteWidth: this.spriteWidth,
      spriteHeight: this.spriteHeight,
      width: this.width,
      height: this.height,
    });
  }
}
