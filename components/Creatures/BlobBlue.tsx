import $ from "@master/literal";
import { useState } from "react";
import useSound from "use-sound";

export type BlobBlueProps = {
  side: "left" | "right";
  x: number;
  y: number;
  hp: number;
};

export function BlobBlue(props: BlobBlueProps) {
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  const scale = 1;

  const size = 32 * scale;

  const { side, x, y, hp } = {
    side: "right",
    ...props,
  };

  const [play] = useSound("/sounds/blob-voice.mp3", { volume: 0.9 });

  function handlePlaySound() {
    if (isPlayingSound) return;

    try {
      play();
      setIsPlayingSound(true);
    } catch (error) {
      setIsPlayingSound(false);
    } finally {
      setTimeout(() => setIsPlayingSound(false), 2000);
    }
  }

  return (
    <>
      <div
        className={$`
        abs 
        cursor:pointer
        w:${size}
        h:${size}
        top:${y}
        left:${x}
        bg:url('/images/blob-blue-${side}.png')
        @blob|1s|steps(8)|infinite
      `}
        onClick={handlePlaySound}
      />
      <p className={$`abs top:${y - 10} left:${x - 20} f:10`}>HP: {hp}</p>
    </>
  );
}
