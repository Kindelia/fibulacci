import { types as T } from "@kindelia/kindelia-js";
import { randomUuid } from "./utils";

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
			id: randomUuid(),
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
