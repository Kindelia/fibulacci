import $ from "@master/literal";
import { useState } from "react";
import { useInterval } from "react-use";
import useSound from "use-sound";

import { removeGameStoreEvent } from "../stores/gameStore";

export type FireballSkillProps = {
  x: number;
  y: number;
  key: number;
  id: string;
};

export function FireballSkill(props: FireballSkillProps) {
  const { x, y, id } = props;

  const [isPlayingSound, setIsPlayingSound] = useState(false);

  const [play] = useSound("/sounds/fireball.mp3");

  function handlePlaySound() {
    if (isPlayingSound) {
      return;
    }

    try {
      play();
      setIsPlayingSound(true);
    } catch (error) {
      setIsPlayingSound(false);
    } finally {
      setTimeout(() => setIsPlayingSound(false), 2000);
    }
  }

  useInterval(() => {
    removeGameStoreEvent(id);
  }, 950);

  return (
    <div
      key={id}
      onClick={handlePlaySound}
      className={$`
        bg:url('/images/skills/fireball.png') 
        h:32 
        w:32 
        top:${y}
        left:${x} 
        abs 
        @fireballX|1s|steps(8)|infinite
      `}
    />
  );
}
