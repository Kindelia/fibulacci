import { ReactNode, useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import useSound from "use-sound";
import { Window } from "../Interfaces/Window";

type StageProps = {
  children: ReactNode;
};

export function Stage(props: StageProps) {
  const { children } = props;

  const [{ isPlaying }, setState] = useState({
    isPlaying: false,
  });

  const [play, { stop }] = useSound("sounds/map-sound.mp3", {
    volume: 0.1,
    loop: true,
  });

  useEffect(() => {
    if (isPlaying) return play();
    else stop();
  }, [isPlaying]);

  return (
    <>
      {/* <button
        className="bg-purple-600 px-4 py-4"
        onClick={() => setState({ isPlaying: !isPlaying })}
      >
        PLAY SOUND
      </button> */}
      <div className="bg-map h-screen w-full">{children}</div>
    </>
  );
}
