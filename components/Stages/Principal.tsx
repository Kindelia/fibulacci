import { ReactNode, useState } from "react";
import useSound from "use-sound";

type StageProps = {
  children: ReactNode;
};

export function Stage(props: StageProps) {
  const { children } = props;

  const [isPlaying, setIsPlaying] = useState(false);

  const [play] = useSound("sounds/map-sound.mp3", {
    volume: 0.1,
    loop: true,
  });

  function handlePlay() {
    if(!isPlaying) {
      setIsPlaying(true);
      play();
    }
  }

  return (
    <>
      <div onClick={handlePlay} className="bg-map h-screen w-full">
        {children}
      </div>
    </>
  );
}
