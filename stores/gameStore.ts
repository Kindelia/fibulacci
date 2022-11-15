import { persistentAtom } from "@nanostores/persistent";
import { FibObject } from "../hooks/useStateQuery";

type Game = {
	isLoading?: boolean;
	player: FibObject;
};

const initialGameState: Game = {
	isLoading: false,
	player: null,
};

export const gameStore = persistentAtom<Game>(
	"game",
	{ ...initialGameState },
	{
		encode: JSON.stringify,
		decode: JSON.parse,
	},
);

export const setGameStore = (game: Game) => {
	gameStore.set({
		...gameStore.get(),
		...game,
	});
};

export function resetGameStore() {
	gameStore.set({
		...initialGameState,
	});
}
