// @ts-nocheck
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import kindelia, { name } from "kindelia-js";

import { NODE_URL } from "../utils/env";

export type FibObject = {
	type: string;
	num: string;
	y: number	;
	sl: string;
	s5: string;
	s1: string;
	xp_tot: string;
	cd: string;
	s7: string;
	s3: string;
	x: number;
	hp: string;
	gd: string;
	s6: string;
	s2: string;
	rt: string;
	s0: string;
	s4: string;
	fat: string;
};

export function useStateQuery() {
	return useQuery<FibObject[]>(
		["stateQuery"],
		async () => {
			const code = (await (
				await axios.get("/contracts/get_parsed.kdl", {})
			).data) as string;

			const response = await kindelia.sendInteract({
				nodeURL: NODE_URL,
				isPublish: false,
				code,
			});

			const numbList = JSON.stringify(response.data).match(
				/(?<=numb":").*?(?="})/g,
			);

			return numbList ?? []
				.map((numb) => name.num_to_name(BigInt(numb)))
				.reduce((acc, curr) => {
					if (curr === "type") {
						acc.push([]);
					}

					acc[acc.length - 1].push(curr);

					return acc;
				}, [])
				.map((numbList: string[]) =>
					numbList.reduce((acc: {}, curr: string, currIndex) => {
						if (currIndex % 2 === 0) {
							acc[curr] = numbList[currIndex + 1];
						}

						return acc;
					}, {}),
				);
		},
		{
			refetchInterval: 1,
			cacheTime: 0,
		},
	);
}
