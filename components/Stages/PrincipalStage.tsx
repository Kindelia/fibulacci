import { ReactNode, useState } from "react";
import useSound from "use-sound";

type PrincipalStageProps = {
  children: ReactNode;
};

export function PrincipalStage(props: PrincipalStageProps) {
  const { children } = props;

  const [isPlaying, setIsPlaying] = useState(false);

  const [play] = useSound("sounds/map-sound.mp3", {
    volume: 0.1,
    loop: true,
  });

  function handlePlay() {
    if (isPlaying) return;

    try {
      play();
      setIsPlaying(true);
    } catch (error) {
      setIsPlaying(false);
    }
  }

  return (
    <>
      <div
        onClick={handlePlay}
        className="bg:url('/images/maps/world-terrain.png') h:100vh w:100%"
      >
        {children}
      </div>
    </>
  );
}
