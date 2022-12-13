import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import kindelia from "@kindelia/kindelia-js";

import { setGameStore } from "../stores/gameStore";
import { NODE_URL } from "../utils/env";
import { FibObject } from "./useStateQuery";

enum EventMoveEnum {
  "W" = 0,
  "ArrowUp" = 0,
  "A" = 1,
  "ArrowLeft" = 1,
  "S" = 2,
  "ArrowDown" = 2,
  "D" = 3,
  "ArrowRight" = 3,
}

export function usePlayerMoveMutation() {
  return useMutation(
    ["moveMutation"],
    async ({
      player,
      keyboardEventKey,
    }: {
      player: FibObject;
      keyboardEventKey: string;
    }) => {
      const code = await (await axios.get("/contracts/act_move.kdl")).data
        .replace("#0", `#${player?.num}`)
        .replace("#1", `#${EventMoveEnum[keyboardEventKey]}`);

      return kindelia
        .sendInteract({
          nodeURL: NODE_URL,
          isPublish: true,
          code,
        })
        .then((res) => {
          // @ts-ignore
          setGameStore({ isLoading: true, fat: player?.fat });
          return res;
        });
    }
  );
}
