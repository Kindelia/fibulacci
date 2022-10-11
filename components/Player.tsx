import { usePlayer } from "../hooks/usePlayer";
import { Blob } from "./Creatures/Blob";
import { Window } from "./Interfaces/Window";

type PlayerProps = {};

export function Player(_props: PlayerProps) {
  const player = usePlayer();

  return (
    <>
      <Blob side="right" x={player.x} y={player.y} />
      <Window />
    </>
  );
}
