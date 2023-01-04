import { types as T } from "@kindelia/kindelia-js";
import { randomUUID } from "crypto";
import { convertDecimalToHex } from "./utils";

type Skill = {
	id: string;
	name: string;
	position: {
		x: number;
		y: number;
	};
};

export function skillSerializer(results: T.BlockResultsJson): Skill {
	// @ts-ignore
	const skill = results.map((r) => {
		const {
			Ok: { Run: { done_term } },
		} = r;

		const {
			Ctr: { name, args },
		} = done_term;

		const position = args[1].Ctr.args[0].Ctr.args[0].Num.numb;

		return {
			id: randomUUID(),
			name,
			position: {
				x: (position % 256) * 32,
				y: (position / 256) * 32,
			},
			type: "fireball",
		};
	})[0];

	return skill;
}

export function joinSerializer(results: T.BlockResultsJson): {
	playerId: number;
	addressETH: string;
} {
	// @ts-ignore
	return results.map((r) => {
		const {
			Ok: { Run: { done_term } },
		} = r;

		const {
			Ctr: { name, args },
		} = done_term;

		return {
			playerId: args[1].Num.numb,
			addressETH: convertDecimalToHex(args[0].Num.numb),
		};
	})[0];
}

export function nojoSerializer(results: T.BlockResultsJson): {
	wallet: string;
} {
	// @ts-ignore
	return results.map((r) => {
		const {
			Ok: { Run: { done_term } },
		} = r;

		const {
			Ctr: { name, args },
		} = done_term;

		return {
			wallet: convertDecimalToHex(args[0].Num.numb),
		};
	})[0];
}