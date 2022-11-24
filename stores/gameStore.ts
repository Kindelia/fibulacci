import { persistentAtom } from "@nanostores/persistent";
import { FibObject } from "../hooks/useStateQuery";

type Game = {
	isLoading?: boolean;
	player: FibObject;
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
	player: {
		type: "player",
		num: "0",
		y: 141,
		sl: "0",
		s5: "0",
		s1: "1",
		xp_tot: "1024",
		cd: "0",
		s7: "45",
		s3: "0",
		x: 45,
		hp: "655",
		gd: "0",
		s6: "0",
		s2: "0",
		rt: "0",
		s0: "107",
		fat: "2473",
		s4: "0",
	},
	events: [],
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
