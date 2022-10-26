import { persistentAtom } from '@nanostores/persistent';

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

const initialPlayerState: Player = {
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
  x: 20,
  y: 30,
};

export const playerStore = persistentAtom<Player>(
  "player",
  {...initialPlayerState},
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  }
);

export function setPlayer(player: Player) {
  const currentPlayer = playerStore.get();

  console.log("currentPlayer", currentPlayer);
  console.log("player", player);
  console.log("merge", {
    ...currentPlayer,
    ...player,
    movements: [...currentPlayer.movements, ...player.movements],
  });

  playerStore.set({
    ...currentPlayer,
    ...player,
    movements: [...currentPlayer.movements, ...player.movements],
  });
}

export function resetPlayer() {
  playerStore.set({
    ...initialPlayerState
  });
}
