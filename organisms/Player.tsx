import $ from "@master/literal";
import { useStore } from "@nanostores/react";
import { useInterval } from "react-use";

import { useKeyboard } from "../hooks/useKeyboard";
import { FibObject } from "../hooks/useStateQuery";
import { gameStore } from "../stores/gameStore";
import { Blob } from "./Blob";
import { Window } from "../components/Interfaces/Window";
import { FireballRangeSkill } from "./FireballRangeSkill";
import { FireballSkill } from "./FireballSkill";
import { toast, useToaster } from "react-hot-toast";
import { loadingStore } from "../stores/loadingStore";
import ms from "ms";

type PlayerProps = {
	player: FibObject;
	players: FibObject[];
};

export function Player(props: PlayerProps) {
	const { player, players } = props;

	const game = useStore(gameStore);
	const loading = useStore(loadingStore);

	const scale = 32;

	const top = player?.y * scale;
	const left = player?.x * scale;

	useInterval(() => {
		window?.scrollTo({
			top,
			left,
		});
	}, 500);

	useKeyboard(player, game);

	return (
		<>
			{game.isEnableRangeSkill ? (
				<FireballRangeSkill top={top} left={left} />
			) : null}
			<Blob side="right" {...player} x={left} y={top} enableDebug />
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
