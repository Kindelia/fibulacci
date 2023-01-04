import { useEffect } from "react";
import { usePlayerMoveMutation } from "./useMoveMutation";

export enum KeyboardMove {
	W = 0,
	ARROWUP = 0,
	A = 1,
	ARROWLEFT = 1,
	S = 2,
	ARROWDOWN = 2,
	D = 3,
	ARROWRIGHT = 3,
}

export function useKeyboard(player: any, game: any) {
	const playerMoveMutation = usePlayerMoveMutation();

	useEffect(() => {
		const handleKeyDown = (keyboardEvent: KeyboardEvent) => {
			const keyboardEventKey = keyboardEvent.key.toUpperCase();

			console.log("[...Object.keys(KeyboardMove)", [
				...Object.keys(KeyboardMove),
			]);
			console.log("a", keyboardEventKey);

			if (![...Object.keys(KeyboardMove)].includes(keyboardEventKey)) {
				return;
			}

			playerMoveMutation.mutate({
				player,
				keyboardEventKey,
			});
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [player, game]);

	return null;
}
