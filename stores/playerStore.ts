import { atom } from "nanostores";

type Player = {
  exp?: number;
  hp?: number;
  level?: number;
  maxHp?: number;
  maxMp?: number;
  movements?: string[];
  mp?: number;
  name?: string;
  score?: number;
  speed?: number;
  x?: number;
  y?: number;
};

const playerInitialState: Player = {
  exp: 0,
  hp: 100,
  level: 1,
  maxHp: 100,
  maxMp: 100,
  movements: [],
  mp: 100,
  name: "Anony",
  score: 0,
  speed: 1,
  x: 0,
  y: 0,
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
