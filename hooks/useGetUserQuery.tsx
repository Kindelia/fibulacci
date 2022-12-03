import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import kindelia from "kindelia-js";

import { NODE_URL } from "../utils/env";
import { formatAddress, getNumbList } from "../utils/utils";

export async function getUser(address) {
  const code = await (
    await axios.get<string>("/contracts/get_user.kdl")
  ).data.replace("#0", formatAddress(address));

  const { data } = await kindelia.sendInteract({
    nodeURL: NODE_URL,
    code,
    isPublish: false,
  });

  const numbList = getNumbList(data);

  if (!numbList) {
    return null;
  }

  const loggedUserId = Number(numbList.pop());

  return loggedUserId;
}

export function useGetUserQuery() {
  return useMutation(["getUserQuery"], getUser);
}
