import * as F from "@fxts/core";
import { AnimatedSprite } from "@inlet/react-pixi";
import useSound from "use-sound";

export type BlobProps = {
  side: "left" | "right";
  x?: number;
  y?: number;
};

export default function Blob(props: BlobProps) {
  const { side, x, y } = props;

  const [play] = useSound(
    "https://www.soundsnap.com/play?t=e&p=files/audio/67/245407-squish_A-12.mp3"
  );

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
        onFrameChange={(i) => {
          if (i !== 2) return;

          play();
        }}
      />
    )
  );
}
