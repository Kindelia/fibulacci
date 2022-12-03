import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import kindelia from "kindelia-js";

import { NODE_URL } from "../utils/env";

export async function resetMutation() {
  const code = await (await axios.get<string>("/contracts/reset.kdl")).data;

  return kindelia
    .sendInteract({
      nodeURL: NODE_URL,
      code,
      isPublish: true,
    })
    .then((res) => res.data);
}

export function useResetMutation() {
  return useMutation(["resetMutation"], resetMutation);
}
