import { useStore } from "@nanostores/react";

import { useStateQuery } from "../../hooks/useStateQuery";
import { useWebSocket } from "../../hooks/useWebSocket";
import { gameStore } from "../../stores/gameStore";
import { BlobBlue } from "../Creatures/BlobBlue";
import { Player } from "../Player/Player";
import { PrincipalStage } from "../Stages/PrincipalStage";

export default function PlayScreen() {
	const game = useStore(gameStore);
	const { data } = useStateQuery();

	useWebSocket();

	const loggedPlayer = data?.find((p) => p.num === game.player.num);
	const players = data?.filter(
		(p) => p.num !== game.player.num && p.type === "player",
	);

	return (
		<PrincipalStage>
			{players?.map((creature) => (
				<BlobBlue
					x={Number(creature.x) * 32}
					y={Number(creature.y) * 32}
					hp={creature.hp}
					side="right"
				/>
			)) ?? []}
			<Player player={loggedPlayer} players={players} />
		</PrincipalStage>
	);
}
