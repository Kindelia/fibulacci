import { usePlayer } from "../hooks/usePlayer";
import { Window } from "./Window";
import { Blob } from "./Blob";

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
