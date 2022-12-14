import { useConnectModal } from "@rainbow-me/rainbowkit";
import Router from "next/router";
import { useState } from "react";
import { useEffectOnce } from "react-use";
import useSound from "use-sound";
import { useAccount } from "wagmi";
import { BgVideo } from "../../atoms/BgVideo";

import { getUser } from "../../hooks/useGetUserQuery";
import { useJoinMutation } from "../../hooks/useJoinMutation";
import { useResetMutation } from "../../hooks/useResetMutation";
import { useStartMutation } from "../../hooks/useStartMutation";
import { setGameStore } from "../../stores/gameStore";
import { sleep } from "../../utils/utils";
import { Logo } from "../../atoms/Logo";
import { Button } from "../../atoms/Button";
import { MarketingText } from "../../atoms/MarketingText";

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
		localStorage.clear();

		if (!account.address) {
			openConnectModal();
			setIsLoading(false);
			return;
		}

		const loggedUserId = await getUser(account.address);

		if (loggedUserId || loggedUserId === 0) {
			// @ts-ignore
			setGameStore({
				player: {
					num: loggedUserId,
					addressETH: account.address,
				},
			});

			setStep(1);
			Router.push("/?step=1");
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

		setStep(1);
		Router.push("/?step=1");
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
		<>
			<BgVideo />
			<div className="flex flex:col h:100vh ai:center jc:space-around fixed w:full">
				<Logo />
				<MarketingText className="my:20" />
				<div className="flex flex:col">				
					<Button className="mt:auto mb:50" onClick={goToPlay} disabled={isLoading}>
						{isLoading ? "Loading" : "Start"}
					</Button>
					<Button className="mt:auto mb:50" onClick={onClickContractReset}>
						Reset (Temp)
					</Button>
					<Button className="mt:auto mb:50" onClick={onClickContractStart}>
						Start (Temp)
					</Button>
					<Button className="mt:auto mb:50" onClick={goToCredits}>
						Credits
					</Button>
				</div>
			</div>
		</>
	);
}
