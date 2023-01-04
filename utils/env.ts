enum Server {
	Mainnet = "https://node.kindelia.org",
	Testnet = "https://node-sfo3.testnet.kindelia.org",
	SFO3 = "https://node-sfo3.testnet.kindelia.org",
	ASE1 = "https://node-ase1.testnet.kindelia.org",
}

export const NODE_URL = Server.Testnet;
export const NODE_SOCKET_URL = NODE_URL.replace("https://", "");
