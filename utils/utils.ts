import { toast } from "react-hot-toast";

export const formatAddress = (address: string): string =>
	`#x${address.replace("0x", "").slice(0, 29)}`;

export const getNumbList = (json: any): string[] =>
	JSON.stringify(json).match(/(?<=numb":").*?(?="})/g);

export const randomUUID = (): string => {
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

export const toastError = (message: string) =>
	toast.error(message, {
		duration: 5000,
		style: {
			backgroundColor: "#F87171",
		},
	});

export const toastSuccess = (message: string) =>
	toast.success(message, {
		duration: 5000,
		style: {
			backgroundColor: "#34D399",
		},
	});

export const convertDecimalToHex = (decimal: number): string =>
	decimal.toString(16);
