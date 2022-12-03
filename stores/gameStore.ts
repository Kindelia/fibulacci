import { persistentAtom } from "@nanostores/persistent";
import { FibObject } from "../hooks/useStateQuery";

type Game = {
  isLoading?: boolean;
  fat: number;
  player: FibObject & { addressETH: string };
  events: {
    id?: string;
    type: "fireball" | "heal" | "attack" | "defend";
    position: {
      x: number;
      y: number;
    };
    ms: number;
  }[];
};

const initialGameState: Game = {
  isLoading: false,
  fat: 0,
  player: {
    num: 0,
    addressETH: "0x000000n",
  },
  events: [],
};

export const gameStore = persistentAtom<Game>(
  "game",
  { ...initialGameState },
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  }
);

export const setGameStore = (game: Game) => {
  gameStore.set({
    ...gameStore.get(),
    ...game,
  });
};

export const addGameStoreEvent = (event: Game["events"][0]) => {
  const game = gameStore.get();

  gameStore.set({
    ...game,
    events: [
      ...game.events,
      {
        id: Math.random().toString(36).substr(2, 18),
        ...event,
      },
    ],
  });
};

export const removeGameStoreEvent = (id: string) => {
  const game = gameStore.get();

  const events = game.events.filter((e) => e.id !== id);

  gameStore.set({
    ...game,
    events,
  });
};

export function resetGameStore() {
  gameStore.set({
    ...initialGameState,
  });
}
