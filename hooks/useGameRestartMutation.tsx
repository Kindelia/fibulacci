import { useMutation } from "@tanstack/react-query";
import kindelia from "kindelia-js";
import { FIB_CONTRACT, FIB_CONTRACT_NAME } from "../utils/contract";
import { NODE_URL } from "../utils/env";

export function useGameRestartMutation() {
  return useMutation(["moveMutation"], () =>
    kindelia
      .sendInteract({
        nodeURL: NODE_URL,
        code: `
          run {
            ask x = (Call '${FIB_CONTRACT_NAME}' {${FIB_CONTRACT.FIB_ACT_RST}});
            (Done x)
          }
      `,
        isPublish: true,
      })
      .then((res) => res.data)
  );
}
