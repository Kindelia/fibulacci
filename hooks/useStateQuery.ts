// @ts-nocheck

import { useQuery } from "@tanstack/react-query";
import kindelia, { name } from "kindelia-js";
import { NODE_URL } from "../utils/env";

export type FibObject = {
  type: string;
  num: string;
  y: string;
  sl: string;
  s5: string;
  s1: string;
  xp_tot: string;
  cd: string;
  s7: string;
  s3: string;
  x: string;
  hp: string;
  gd: string;
  s6: string;
  s2: string;
  rt: string;
  s0: string;
  s4: string;
};

export function useStateQuery() {
  return useQuery<FibObject[]>(
    ["stateQuery"],
    () =>
      kindelia
        .sendInteract({
          nodeURL: NODE_URL,
          isPublish: false,
          code: `
            run {
              ask tick = (Tick);
              ask x    = (Call 'Flb' {Flb_act_get});
              let r    = (Flb_kdl_stpr x tick);
              (Done r)
            }
          `,
        })
        .then((res) => {
          const numbList = JSON.stringify(res.data).match(
            /(?<=numb":").*?(?="})/g
          );

          return numbList
            .map((numb) => name.num_to_name(BigInt(numb)))
            .reduce((acc, curr) => {
              if (curr === "type") acc.push([]);

              acc[acc.length - 1].push(curr);

              return acc;
            }, [])
            .map((numbList: string[]) =>
              numbList.reduce((acc: {}, curr: string, currIndex) => {
                if (currIndex % 2 === 0) {
                  acc[curr] = numbList[currIndex + 1];
                }

                return acc;
              }, {})
            );
          return res;
        }),
    {
      refetchInterval: 1,
      cacheTime: 0,
    }
  );
}
