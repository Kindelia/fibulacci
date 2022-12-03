// import rustie from "rustie";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import kindelia from "kindelia-js";

import { NODE_URL } from "../utils/env";

export function useJoinMutation() {
  return useMutation(
    ["joinMutation"],
    async ({ address }: { address: string }) => {
      const newAddress = `#x${address.replace("0x", "").slice(0, 29)}`;

      const code: string = await (
        await axios.get<string>("/contracts/join.kdl")
      ).data.replace("#0", newAddress);

      return kindelia.sendInteract({
        nodeURL: NODE_URL,
        isPublish: true,
        code,
      });
    }
  );
}
