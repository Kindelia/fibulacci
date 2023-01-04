import "@master/css";
import "@master/keyframes.css";
import "@master/normal.css";
import "@fontsource/press-start-2p";
import "@rainbow-me/rainbowkit/styles.css";

import "../styles/globals.css";

import "../utils/webSocket";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const { chains, provider } = configureChains(
	[mainnet, polygon, optimism, arbitrum],
	[alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()],
);

const { connectors } = getDefaultWallets({
	appName: "Fibulacci",
	chains,
});

const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
});

function MyApp({ Component, pageProps }) {
	return (
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider chains={chains}>
				<QueryClientProvider client={new QueryClient()}>
					<Component {...pageProps} />
					<Toaster position="top-right" reverseOrder={false} />
				</QueryClientProvider>
			</RainbowKitProvider>
		</WagmiConfig>
	);
}

export default MyApp;
