import $ from '@master/literal';
import useSound from 'use-sound';

export type BlobProps = {
  side: "left" | "right";
  x: number;
  y: number;
};

export function Blob(props: BlobProps) {
  const scale = 1;

  const size = 32 * scale;

  const { side, x, y } = {
    side: "right",
    ...props,
  };

  const [play] = useSound("/sounds/blob-voice.mp3", { volume: 0.9 });

  return (
    <div
      className={$`
        abs 
        cursor:pointer
        w:${size}
        h:${size}
        top:${y}
        left:${x}
        bg:url('/images/blob-${side}.png')
        @blob|1s|steps(8)|infinite
      `}
      onClick={() => play()}
    />
  );
}