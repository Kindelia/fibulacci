import { useConnectModal } from "@rainbow-me/rainbowkit";
import Router from "next/router";
import { useEffect, useState } from "react";
import { useEffectOnce } from "react-use";
import useSound from "use-sound";
import { useAccount } from "wagmi";

import { getUser } from "../../hooks/useGetUserQuery";
import { useJoinMutation } from "../../hooks/useJoinMutation";
import { useResetMutation } from "../../hooks/useResetMutation";
import { startMutation, useStartMutation } from "../../hooks/useStartMutation";
import { setGameStore } from "../../stores/gameStore";
import { sleep } from "../../utils/utils";
import { LogoIcon } from "../Icons/LogoIcon";

export type StartScreenProps = {
	setStep: (step: 0 | 1 | 2) => void;
};

export function StartScreen(props: StartScreenProps) {
	const { setStep } = props;

	const account = useAccount();
	const { openConnectModal } = useConnectModal();

	const [isPlayingSound, setIsPlayingSound] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const join = useJoinMutation();
	const start = useStartMutation();
	const reset = useResetMutation();

	const [play] = useSound("sounds/magnetar.mp3", { volume: 0.9 });

	function handlePlaySound() {
		if (isPlayingSound) {
			return;
		}

		try {
			play();
			setIsPlayingSound(true);
		} catch (error) {
			setIsPlayingSound(false);
		}
	}

	async function goToPlay() {
		setIsLoading(true);

		const loggedUserId = await getUser(account.address);

		if (loggedUserId || loggedUserId === 0) {
			// @ts-ignore
			setGameStore({
				player: {
					num: loggedUserId,
					addressETH: account.address,
				},
			});

			setStep(2);
			Router.push("/?step=2");
			return;
		}

		await join.mutate({ address: account.address });

		await sleep(1000 * 10);

		const id = await getUser(account.address);

		// @ts-ignore
		setGameStore({
			player: {
				num: id,
				addressETH: account.address,
			},
		});

		setIsLoading(false);

		setStep(2);
		Router.push("/?step=2");
	}

	function goToCredits() {
		Router.push("/credits");
	}

	function onClickContractStart() {
		start.mutate();

		alert("Contract started, wait a few minutes!");
	}

	function onClickContractReset() {
		reset.mutate();

		alert("Contract reseted, wait a few minutes!");
	}

	useEffectOnce(() => {
		handlePlaySound();
	});

	return (
		<div className="flex flex:col ai:center jc:center h:100vh bg:black gap:20">
			<LogoIcon className="h:20% @float|3s|ease-in-out|infinite mb:10%" />
			<p>Welcome Fibulacci</p>
			{!isLoading && !account.address ? (
				<button
					className="bg:white py:20 px:100 f:black rounded bg:gray-60:hover"
					onClick={() => openConnectModal()}
				>
					CONNECT WALLET
				</button>
			) : null}
			{!isLoading && account.address ? (
				<button
					className="bg:white py:20 px:100 f:black rounded bg:gray-60:hover"
					onClick={goToPlay}
				>
					START GAME
				</button>
			) : null}
			{isLoading ? (
				<button
					className="bg:white py:20 px:100 f:black rounded bg:gray-60:hover"
					disabled={true}
				>
					Loading...
				</button>
			) : null}
			<button
				onClick={onClickContractStart}
				className="bg:white py:20 px:100 f:black rounded bg:gray-60:hover"
			>
				Contract Start
			</button>
			<button
				onClick={onClickContractReset}
				className="bg:white py:20 px:100 f:black rounded bg:gray-60:hover"
			>
				Contract Reset
			</button>
			<p onClick={goToCredits} className="cursor:pointer">
				CREDITS
			</p>
		</div>
	);
}
