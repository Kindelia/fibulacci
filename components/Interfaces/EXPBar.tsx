import * as F from "@fxts/core";
import $ from "@master/literal";
import { useStore } from "@nanostores/react";
import { playerStore } from "../../stores/playerStore";

export type EXPBarProps = {};

export function EXPBar(props: EXPBarProps) {
  const player = useStore(playerStore);

  const scale = 2;

  const width = 8 * scale;
  const height = 8 * scale;

  return (
    <div>
      <div className="flex jc:space-between mb:20">
        <p>EXP</p>
        <p>Lvl. {player.level ?? 1}</p>
      </div>
      <div className="flex gap:10">
        {F.pipe(
          F.range(14),
          F.map((i: number) => (
            <div
              className={$`
                bg:url('/images/exp-full.png')
                w:${width}
                h:${height}
                bg:no-repeat
                bg:cover
              `}
              key={i}
            />
          )),
          F.toArray
        )}
      </div>
    </div>
  );
}
