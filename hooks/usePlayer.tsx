import { useStore } from "@nanostores/react";
import { useKey } from "react-use";
import { playerStore, setPlayer } from "../stores/playerStore";

export function usePlayer() {
  const player = useStore(playerStore);

  useKey("ArrowUp", () => setPlayer({ y: player.y - 1 }));
  useKey("ArrowDown", () => setPlayer({ y: player.y + 1 }));
  useKey("ArrowRight", () => setPlayer({ x: player.x + 1 }));
  useKey("ArrowLeft", () => setPlayer({ x: player.x - 1 }));

  return player;
}
