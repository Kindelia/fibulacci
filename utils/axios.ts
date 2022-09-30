import axios from "axios";

const urls: string[] = ["0.0.0.0", "64.227.110.69", "188.166.3.140"];

export const client = axios.create({
  baseURL: `http://${urls[0]}:8000`,
  headers: {
    // "Content-Type": "text/plain",
    "Content-Type": "application/json",
  },
});
