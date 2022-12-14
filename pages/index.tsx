import Head from "next/head";
import { useState } from "react";
import { useEffectOnce } from "react-use";

import PlayScreen from "../components/Screens/PlayScreen";
import { StartScreen } from "../components/Screens/StartScreen";

export default function Index() {
	const [step, setStep] = useState<0 | 1 | 2>(0);

	useEffectOnce(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const step = urlParams.get("step");

		if (step) {
			setStep(Number(step) as 0 | 1 | 2);
		}
	});

	return (
		<div>
			<Head>
				<title>Fibulacci - Kindelia Dapps</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				{
					{
						0: <StartScreen setStep={setStep} />,
						1: <PlayScreen />,
						// 2: <CreditScreen />,
					}[step]
				}
			</main>
		</div>
	);
}
