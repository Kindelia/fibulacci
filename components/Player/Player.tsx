import { useStore } from "@nanostores/react";
import { useInterval, useKey } from "react-use";

import { usePlayerMoveMutation } from "../../hooks/useMoveMutation";
import { addGameStoreEvent, gameStore } from "../../stores/gameStore";
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

if (typeof window !== "undefined") {
  window.addEventListener("click", (e) => {
    addGameStoreEvent({
      type: "fireball",
      position: {
        x: e.offsetX,
        y: e.offsetY,
      },
      ms: 5000,
    });
  });
}

export function Player(props: PlayerProps) {
  const { player } = useStore(gameStore);
  const game = useStore(gameStore);

  const playerMoveMutation = usePlayerMoveMutation();

  useInterval(() => {
    window?.scrollTo({
      top: player.y * 32,
      left: player.x * 32,
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
      <Blob
        side="right"
        x={player.x * speed}
        y={player.y * speed}
        enableDebug
      />
      <Window x={player.x * speed} y={player.y * speed} />
      {game.events.map((e) => {
        return {
          fireball: (
            <FireballSkill x={e.position.x} y={e.position.y} id={e.id} />
          ),
        }[e.type];
      })}
    </>
  );
}
