import { useMutation, useQuery } from "@tanstack/react-query";
import kindelia from "kindelia-js";
import { setGameStore } from "../stores/gameStore";
import { NODE_URL } from "../utils/env";

enum EventMoveEnum {
  "ArrowUp" = 0,
  "ArrowLeft" = 1,
  "ArrowDown" = 2,
  "ArrowRight" = 3,
}

export function usePlayerMoveMutation() {
  return useMutation(
    ["moveMutation"],
    ({
      player,
      eventMove,
    }: {
      playerId: any;
      eventMove: KeyboardEvent;
    }) => {
      return kindelia
        .sendInteract({
          nodeURL: NODE_URL,
          isPublish: true,
          code: `
          run {
              let code = (Flb_kdl_walk #${
                EventMoveEnum[eventMove.key]
              } #${player.id});
              ask x = (Call 'Flb' {Flb_act_act code});
              (Done x)
          }
      `,
        })
        .then((res) => {
          console.log('DHUASUHDASHDUHAS', res.data)

          if (res.data[0]["Ok"] === null) {
            setGameStore({ isLoading: true, player });
          }

          return res;
        });
    }
  );
}
