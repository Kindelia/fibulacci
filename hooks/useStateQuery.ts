// @ts-nocheck
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import kindelia, { name } from "@kindelia/kindelia-js";

import { NODE_URL } from "../utils/env";

export type FibObject = {
  type?: "player" | "npc" | "monster";
  num?: number;
  y?: number;
  sl?: number;
  s5?: number;
  s1?: number;
  xp_tot?: number;
  cd?: number;
  s7?: number;
  s3?: number;
  x?: number;
  hp?: number;
  gd?: number;
  s6?: number;
  s2?: number;
  rt?: number;
  s0?: number;
  s4?: number;
  fat?: number;
};

export function useStateQuery() {
  return useQuery<FibObject[]>(
    ["stateQuery"],
    async () => {
      const code = (await (
        await axios.get("/contracts/get_parsed.kdl")
      ).data) as string;

      const response = await kindelia.sendInteract({
        nodeURL: NODE_URL,
        isPublish: false,
        code,
      });

      const numbList = JSON.stringify(response.data).match(
        /(?<=numb":").*?(?="})/g
      );

      return numbList
        .map((numb) => name.num_to_name(BigInt(numb)))
        .reduce((acc, curr) => {
          5;
          if (curr === "type") {
            acc.push([]);
          }

          acc[acc.length - 1].push(curr);

          return acc;
        }, [])
        .map((numbList: string[]) =>
          numbList.reduce((acc: {}, curr: string, currIndex) => {
            if (currIndex % 2 === 0) {
              acc[curr] = numbList[currIndex + 1];

              if (curr !== "type") {
                acc[curr] = Number(acc[curr]);
              }
            }

            return acc;
          }, {})
        );
    },
    {
      refetchInterval: 1000,
      cacheTime: 0,
    }
  );
}
