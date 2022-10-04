import axios from "axios";

const urls: string[] = [
  "0.0.0.0",
  "node-ams3.testnet.kindelia.org",
  "node-sfo3.testnet.kindelia.org",
];

export const api = axios.create({
  baseURL: `https://${urls[1]}`,
});
