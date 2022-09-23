export class Castle {
    private imageElement: HTMLImageElement;
    private readonly imageSrc = "images/maps/castle.jpeg";

    constructor() {

    }

    draw(context: CanvasRenderingContext2D) {
        this.imageElement = new Image();
        this.imageElement.src = this.imageSrc;

        context.drawImage(
            this.imageElement,
            0,
            0,
            563,
            878,
            0,
            0,
            563,
            878
        );
    }
}