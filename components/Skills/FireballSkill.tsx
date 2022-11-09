import $ from "@master/literal";
import { useState } from "react";
import useSound from "use-sound";

export type FireballSkillProps = {
  x: number;
  y: number;
};

export function FireballSkill(props: FireballSkillProps) {
  const { x, y } = props;

  const [isPlayingSound, setIsPlayingSound] = useState(false);

  const [play] = useSound("/sounds/fireball.mp3");

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
    <div
      onClick={handlePlaySound}
      className={$`
        bg:url('/images/skills/fireball.png') 
        h:32 
        w:32 
        top:${y} 
        left:${x} 
        abs 
        @fireball|2s|steps(8)
      `}
    />
  );
}
