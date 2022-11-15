import { persistentAtom } from "@nanostores/persistent";
import { FibObject } from "../hooks/useStateQuery";

type Player = FibObject & {
	level?: number;
};

const initialPlayerState: Player = {
	type: "Player",
	num: "",
	y: "5",
	sl: "",
	s5: "",
	s1: "",
	xp_tot: "",
	cd: "",
	s7: "",
	s3: "",
	x: "5",
	hp: "",
	gd: "",
	s6: "",
	s2: "",
	rt: "",
	s0: "",
	s4: "",
	fat: "",
	level: 1,
};

export const playerStore = persistentAtom<Player>(
	"player",
	{ ...initialPlayerState },
	{
		encode: JSON.stringify,
		decode: JSON.parse,
	},
);

export function setPlayer(player: Player) {
	playerStore.set({
		...player,
		level: Number(player.xp_tot) / 10,
	});
}

export function resetPlayer() {
	playerStore.set({
		...initialPlayerState,
	});
}
