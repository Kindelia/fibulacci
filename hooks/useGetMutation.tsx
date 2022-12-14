import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import kindelia from "@kindelia/kindelia-js";

import { NODE_URL } from "../utils/env";

export async function getMutation() {
  const code = await (await axios.get<string>("/contracts/get.kdl")).data;

  return kindelia
    .sendInteract({
      nodeURL: NODE_URL,
      code,
      isPublish: true,
    })
    .then((res) => res.data);
}

export function useGetMutation() {
  return useMutation(["startMutation"], getMutation);
}
