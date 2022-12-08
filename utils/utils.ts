export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const formatAddress = (address: string): string =>
  `#x${address.replace("0x", "").slice(0, 29)}`;

export const getNumbList = (json: any): string[] =>
  JSON.stringify(json).match(/(?<=numb":").*?(?="})/g);
