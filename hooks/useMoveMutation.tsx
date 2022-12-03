import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import kindelia from "@kindelia/kindelia-js";

import { setGameStore } from "../stores/gameStore";
import { NODE_URL } from "../utils/env";
import { FibObject } from "./useStateQuery";

enum EventMoveEnum {
  "ArrowUp" = 0,
  "ArrowLeft" = 1,
  "ArrowDown" = 2,
  "ArrowRight" = 3,
}

export function usePlayerMoveMutation() {
  return useMutation(
    ["moveMutation"],
    async ({
      player,
      keyboardEvent,
    }: {
      player: FibObject;
      keyboardEvent: KeyboardEvent;
    }) => {
      const code = await (await axios.get("/contracts/act_move.kdl")).data
        .replace("#0", `#${player?.num}`)
        .replace("#1", `#${EventMoveEnum[keyboardEvent.key]}`);

      return kindelia
        .sendInteract({
          nodeURL: NODE_URL,
          isPublish: true,
          code,
        })
        .then((res) => {
          // @ts-ignore
          setGameStore({ isLoading: true, fat: player.fat });
          return res;
        });
    }
  );
}
