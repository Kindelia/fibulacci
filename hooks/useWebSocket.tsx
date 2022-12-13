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
				`ws://${NODE_URL_WITHOUT_HTTPS}:3000/?tags=add_block`,
			);
			websocket.onopen = () => {
				console.log("connected");
			};
			websocket.onmessage = (event) => {
				const data = event.data;

				if (data.includes("F_4")) {
					console.log(data);

					if (data.includes("F_4_res_acte")) {
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

				// const queryKey = [...data.entity, data.id].filter(Boolean);
				//   queryClient.invalidateQueries(queryKey);
				//   queryClient.setQueriesData(queryKey, data);
				// queryClient.getQueriesData(queryKey);
			};

			return () => {
				websocket.close();
			};
		} catch (error) {
			console.log(error);
		}
	}, [queryClient]);
}
