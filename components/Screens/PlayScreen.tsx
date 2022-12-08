import { useStore } from "@nanostores/react";
// import { useReactQuerySubscription } from "../../hooks/exampleSocket";

import { useStateQuery } from "../../hooks/useStateQuery";
import { gameStore } from "../../stores/gameStore";
import { BlobBlue } from "../Creatures/BlobBlue";
import { Player } from "../Player/Player";
import { PrincipalStage } from "../Stages/PrincipalStage";

export default function PlayScreen() {
	const game = useStore(gameStore);
	const { data } = useStateQuery();

	// useReactQuerySubscription();

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
