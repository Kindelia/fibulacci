export const sleep = (ms: number) =>
	new Promise((resolve) => setTimeout(resolve, ms));

export const formatAddress = (address: string): string =>
	`#x${address.replace("0x", "").slice(0, 29)}`;

export const getNumbList = (json: any): string[] =>
	JSON.stringify(json).match(/(?<=numb":").*?(?="})/g);

export const randomUuid = (): string => {
	return Array(8)
		.fill(undefined)
		.map(() =>
			Math.floor((1 + Math.random()) * 0x10000)
				.toString(16)
				.substring(1),
		)
		.join("-");
};

export const createDiamond = (range: number): number[][] =>
	Array(range * 2 + 1)
		.fill(undefined)
		.map((_, y) =>
			Array(range * 2 + 1)
				.fill(undefined)
				.map((_, x) => {
					const distance = Math.abs(x - range) + Math.abs(y - range);
					return distance <= range ? 1 : 0;
				}),
		);
