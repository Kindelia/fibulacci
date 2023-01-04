import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import kindelia from "@kindelia/kindelia-js";

import { setGameStore } from "../stores/gameStore";
import { NODE_URL } from "../utils/env";
import { FibObject } from "./useStateQuery";
import { KeyboardMove } from "./useKeyboard";
import { setLoadingStore } from "../stores/loadingStore";

export function usePlayerMoveMutation() {
	return useMutation(
		["moveMutation"],
		async ({
			player,
			keyboardEventKey,
		}: {
			player: FibObject;
			keyboardEventKey: string;
		}) => {
			const code = await (
				await axios.get("/contracts/act_move.kdl")
			).data
				.replace("#0", `#${player?.num}`)
				.replace("#1", `#${KeyboardMove[keyboardEventKey]}`);

			setLoadingStore({
				isMoveGameLoading: true,
			});

			return kindelia.sendInteract({
				nodeURL: NODE_URL,
				isPublish: true,
				code,
			});
		},
	);
}
