import {
	addGameStoreEvent,
	getAddressETH,
	setGameStore,
} from "../stores/gameStore";
import { resetLoadingStore, setLoadingStore } from "../stores/loadingStore";
import { NODE_SOCKET_URL } from "./env";
import { joinSerializer, nojoSerializer, skillSerializer } from "./gamb";
import { toastError, toastSuccess } from "./utils";

try {
	const websocket = new WebSocket(
		`wss://${NODE_SOCKET_URL}/events?tags=add_block`,
	);

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

				resetLoadingStore();

				return;
			}

			if(data.includes("F_4_res_acte") && data.includes("F_4_evt_walk")) {
				console.log('ENTREI AQUI');
				resetLoadingStore();
				return;
			}

			if (data.includes("F_4_res_join")) {
				const parsedData = JSON.parse(data);

				const join = joinSerializer(parsedData.AddBlock.event.Computed.results);

				if (
					!getAddressETH
						.get()
						.toLowerCase()
						.includes(join.addressETH.toLowerCase())
				) {
					resetLoadingStore();
					return;
				}

				console.log('join', join)

				setGameStore({
					// @ts-ignore
					player: {
						num: join.playerId,
					},
				});

				resetLoadingStore();

				window.location.href = "/?step=1";

				return;
			}

			if (data.includes("F_4_res_rese")) {
				toastSuccess(
					"Someone has reset the game, wait for the start to start the game!",
				);
				resetLoadingStore();
				return;
			}

			if(data.includes("F_4_res_star")) {
				toastSuccess("Someone has reset the game, wait for the start to start the game!");
				resetLoadingStore();
				return;
			}

			if (
				data.includes("F_4_res_noqu") ||
				data.includes("F_4_res_qued") ||
				data.includes("F_4_res_nojo")
			) {
				const parsedData = JSON.parse(data);
				const error = nojoSerializer(parsedData.AddBlock.event.Computed.results);

				console.log('AQUI', error)
				
				toastError("You cannot join the game as the game has not started yet!");
				resetLoadingStore();
				return;
			}

			if (data.includes("F_4_res_wrph")) {
				toastError("The game has already been reset!");
				resetLoadingStore();
				return;
			}
		}
	};

	websocket.onerror = (_event) => {
		toastError("An error has occurred, please reload the page");
	};

	websocket.onclose = (_event) => {
		toastError("The connection has been closed, please reload the page");
	};
} catch (error) {
	console.log(error);
}
