import { atom } from "nanostores";

type Player = {
  name?: string;
  score?: number;
  speed?: number;
  x?: number;
  y?: number;
  movements?: string[];
};

const playerInitialState: Player = {
  name: "Anony",
  score: 0,
  speed: 1,
  x: 0,
  y: 0,
  movements: [],
};

export const playerStore = atom<Player>({
  ...playerInitialState,
});

export function setPlayer(player: Player) {
  playerStore.set({ ...playerStore.get(), ...player });
}

export function resetPlayer() {
  playerStore.set({
    ...playerInitialState,
  });
}
