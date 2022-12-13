import { useEffect } from "react";
import { useQueryClient } from "wagmi";
import { addGameStoreEvent } from "../stores/gameStore";

import { NODE_URL_WITHOUT_HTTPS } from "../utils/env";
import { skillSerializer } from "../utils/gamb";

export function useWebSocket() {
	const queryClient = useQueryClient();

	useEffect(() => {
		try {
			const websocket = new WebSocket(
				`wss://${NODE_URL_WITHOUT_HTTPS}/events?tags=add_block`,
			);

			websocket.onopen = () => {
				console.log("connected");
			};

			websocket.onmessage = (event) => {
				const data = event.data;

				if (data.includes("F_4")) {
					console.log(data);

					if (data.includes("F_4_res_acte") && data.includes("F_4_evt_skil")) {
						const parsedData = JSON.parse(data);

						const skill = skillSerializer(
							parsedData.AddBlock.event.Computed.results,
						);

						addGameStoreEvent({
							id: skill.id,
							position: skill.position,
							type: "fireball",
						});
					}
				}
			};

			return () => {
				websocket.close();
			};
		} catch (error) {
			console.log(error);
		}
	}, [queryClient]);
}
