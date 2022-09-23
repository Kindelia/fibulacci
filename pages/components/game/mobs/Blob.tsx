import * as F from "@fxts/core";
import { AnimatedSprite, Container, Stage } from "@inlet/react-pixi";

export type BlobProps = {
  side: "left" | "right";
  x?: number;
  y?: number;
};

export default function Blob(props: BlobProps) {
  const { side, x, y } = props;

  const images = F.pipe(
    F.range(8),
    F.map((i) => `images/mobs/blob/${side}/blob-${side}-${i - 1}.png`),
    F.toArray
  );

  return (
      <AnimatedSprite
        // scale={2}
        images={images}
        x={x ?? 0}
        y={y ?? 0}
        isPlaying
        width={32}
        height={32}
        initialFrame={0}
        animationSpeed={0.1}
        />
  );
}
