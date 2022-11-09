import { useEffect } from "react";
import { useEffectOnce, useInterval, useKey } from "react-use";
import { usePlayerMoveMutation } from "../../hooks/useMoveMutation";

import { Blob } from "../Creatures/Blob";
import { Window } from "../Interfaces/Window";
import { FireballSkill } from "../Skills/FireballSkill";

type PlayerProps = {
  player: {
    x: number;
    y: number;
    num: string;
  };
};

// window?.addEventListener("click", (e) => {
//   console.log(e.clientX, e.clientY);
// });

export function Player(props: PlayerProps) {
  const { player } = props;
  const { x, y } = player;

  const playerMoveMutation = usePlayerMoveMutation();

  useInterval(() => {
    window?.scrollTo({
      top: y * 32,
      left: x * 32,
    });
  }, 500);

  const speed = 32;

  useKey("ArrowUp", (eventMove: KeyboardEvent) =>
    playerMoveMutation.mutate({
      eventMove,
      player,
    })
  );

  useKey("ArrowDown", (eventMove: KeyboardEvent) =>
    playerMoveMutation.mutate({
      eventMove,
      player,
    })
  );

  useKey("ArrowLeft", (eventMove: KeyboardEvent) =>
    playerMoveMutation.mutate({
      eventMove,
      player,
    })
  );

  useKey("ArrowRight", (eventMove: KeyboardEvent) =>
    playerMoveMutation.mutate({
      eventMove,
      player,
    })
  );

  return (
    <>
      <Blob side="right" x={x * speed} y={y * speed} />
      {/* <FireballSkill x={x * 32 + 10} y={y * 32 + 10} /> */}
      <Window x={x * speed} y={y * speed} />
    </>
  );
}
