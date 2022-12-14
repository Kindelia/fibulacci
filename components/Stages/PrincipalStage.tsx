import $ from '@master/literal';
import { ReactNode, useEffect, useState } from 'react';
import useSound from 'use-sound';

type PrincipalStageProps = {
  children: ReactNode;
};

export function PrincipalStage(props: PrincipalStageProps) {
  const { children } = props;

  const [isPlaying, setIsPlaying] = useState(false);

  const [play] = useSound("sounds/map-sound.mp3", {
    volume: 1,
    loop: true,
  });

  function handlePlay() {
    if (isPlaying) {
      return;
    }

    try {
      play();
      setIsPlaying(true);
    } catch (error) {
      setIsPlaying(false);
    }
  }

  return (
    <div
      id="principal-stage"
      className={$`
      h:${5120 * 2}
      w:${5120 * 2}
      bg:black
      scrollbar:none
    `}
    >
      <div
        onClick={handlePlay}
        className="bg:url('/images/maps/world-terrain.png') h:5120 w:5120 abs top:50% left:50%"
      >
        <div className="bg:url('/images/maps/world-objects.png') h:5120 w:5120">
          {children}
        </div>
      </div>
    </div>
  );
}
