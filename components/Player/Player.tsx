import $ from "@master/literal";
import { useStore } from "@nanostores/react";
import { useEffect } from "react";
import { useInterval } from "react-use";

import { usePlayerMoveMutation } from "../../hooks/useMoveMutation";
import { FibObject } from "../../hooks/useStateQuery";
import { gameStore, setGameStore } from "../../stores/gameStore";
import { Blob } from "../Creatures/Blob";
import { Window } from "../Interfaces/Window";
import { FireballRangeSkill } from "../Skills/FireballRangeSkill";
import { FireballSkill } from "../Skills/FireballSkill";

type PlayerProps = {
	player: FibObject;
	players: FibObject[];
};

export function Player(props: PlayerProps) {
	const { player, players } = props;

	const playerMoveMutation = usePlayerMoveMutation();
	const game = useStore(gameStore);

	const scale = 32;

	const top = player?.y * scale;
	const left = player?.x * scale;

	useInterval(() => {
		window?.scrollTo({
			top,
			left,
		});
	}, 500);

	useEffect(() => {
		const handleKeyDown = (keyboardEvent: KeyboardEvent) => {
			// if(game.isLoading) {
			//   return;
			// }

			const keyboardEventKey = keyboardEvent.key.toUpperCase();

			if (
				![
					"W",
					"S",
					"A",
					"D",
					"ArrowUp",
					"ArrowDown",
					"ArrowLeft",
					"arrowRight",
				].includes(keyboardEventKey)
			) {
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

	if (game.isLoading && player?.fat !== game?.fat) {
		// @ts-ignore
		setGameStore({ isLoading: false, fat: player?.fat });
	}

	return (
		<>
			{game.isEnableRangeSkill ? (
				<FireballRangeSkill top={top} left={left} />
			) : null}
			<Blob side="right" {...player} x={left} y={top} enableDebug />
			{game.isLoading ? (
				<div className={$`abs top:${top - 20} left:${left - 35}`}>
					<p>Loading...</p>
				</div>
			) : null}
			<Window player={player} players={players} />
			{/* <EventLogs /> */}
			{game.events.map((e) => {
				return {
					fireball: (
						// @ts-ignore
						<FireballSkill x={e.position.x} y={e.position.y} id={e.id} />
					),
				}[e.type];
			})}
		</>
	);
}
