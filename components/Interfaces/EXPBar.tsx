import * as F from "@fxts/core";
import $ from "@master/literal";

export type EXPBarProps = {
  totalEXP: number;
};

export function EXPBar(props: EXPBarProps) {
  const { totalEXP } = props;

  const scale = 3;

  const width = 8 * scale;
  const height = 8 * scale;

  const currentLevel = F.pipe(
    F.range(15),
    F.map((i) => {
      const level = i + 1;
      const nextLevelEXP = 65 + i * 35;

      return {
        level,
        nextLevelEXP,
        totalEXP,
      };
    }),
    F.find((level) => totalEXP < level.totalEXP)
  );

  return (
    <div>
      <div className="flex jc:space-between mb:20">
        <p>EXP. {totalEXP}</p>
        <p>Lvl. {currentLevel?.level ?? 1}</p>
      </div>
      <div className="flex gap:10">
        {F.pipe(
          F.range(10),
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
