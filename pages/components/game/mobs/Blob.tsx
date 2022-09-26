import * as F from "@fxts/core";
import { AnimatedSprite, Container, Stage } from "@inlet/react-pixi";

export type BlobProps = {
  side: "left" | "right";
  x?: number;
  y?: number;
};

export default function Blob(props: BlobProps) {
  const { side, x, y } = props;

  return F.pipe(
    F.range(8),
    F.map((i) => `images/mobs/blob/${side}/blob-${side}-${i}.png`),
    F.toArray,
    (images) => (
      <AnimatedSprite
        x={x ?? 0}
        y={y ?? 0}
        isPlaying
        images={images}
        animationSpeed={0.1}
      />
    )
  );
}
