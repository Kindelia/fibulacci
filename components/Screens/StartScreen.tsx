import { useStore } from "@nanostores/react";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import Router from "next/router";
import { useState } from "react";
import { useEffectOnce } from "react-use";
import useSound from "use-sound";
import { useAccount } from "wagmi";

import { BgVideo } from "../../atoms/BgVideo";
import { Button } from "../../atoms/Button";
import { Logo } from "../../atoms/Logo";
import { MarketingText } from "../../atoms/MarketingText";
import { useJoinMutation } from "../../hooks/useJoinMutation";
import { getUser } from "../../hooks/useGetUserQuery";
import { useResetMutation } from "../../hooks/useResetMutation";
import { useStartMutation } from "../../hooks/useStartMutation";
import { setGameStore } from "../../stores/gameStore";
import {
	loadingStore,
	resetLoadingStore,
	setLoadingStore,
} from "../../stores/loadingStore";

export type StartScreenProps = {
	setStep: (step: 0 | 1 | 2) => void;
	isDev: boolean;
};

export function StartScreen(props: StartScreenProps) {
	const { isDev, setStep } = props;

	const loading = useStore(loadingStore);

	const isLoading = Object.values(loading).some((value) => value);

	const account = useAccount();
	const { openConnectModal } = useConnectModal();

	const [isPlayingSound, setIsPlayingSound] = useState(false);

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
		setLoadingStore({
			isEnterGameLoading: true,
		});

		if (!account?.address) {
			openConnectModal();
			setLoadingStore({
				isEnterGameLoading: false,
			});
			return;
		}

		const loggedUserId = await getUser(account.address);

		if (loggedUserId || loggedUserId === 0) {
			setGameStore({
				player: {
					addressETH: account.address,
					num: loggedUserId,
				},
			});

			resetLoadingStore();

			setStep(1);

			return;
		}

		await join.mutate({ address: account.address });

		// @ts-ignore
		setGameStore({
			player: {
				addressETH: account.address,
			},
		});
	}

	const onClickReset = async () => {
		setLoadingStore({
			isResetGameLoading: true,
		});

		await reset.mutate();
	};

	const onClickStart = async () => {
		setLoadingStore({
			isStartGameLoading: true,
		});

		await start.mutate();
	};

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
					<Button
						className="mt:auto mb:50"
						onClick={goToPlay}
						disabled={isLoading}
						suppressHydrationWarning
					>
						{loading?.isEnterGameLoading
							? "Loading"
							: !account?.address
							? "Connect Wallet"
							: "Start"}
					</Button>
					{isDev && (
						<>
							<Button
								className="mt:auto mb:50"
								onClick={onClickReset}
								disabled={isLoading}
							>
								{loading.isResetGameLoading ? "Loading" : "Reset Contract"}
							</Button>
							<Button
								className="mt:auto mb:50"
								onClick={onClickStart}
								disabled={isLoading}
							>
								{loading.isStartGameLoading ? "Loading" : "Start Contract"}
							</Button>
						</>
					)}
					<Button
						className="mt:auto mb:50"
						onClick={() => Router.push("/credits")}
					>
						Credits
					</Button>
				</div>
			</div>
		</>
	);
}
