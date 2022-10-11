import * as F from "@fxts/core";
import Image from "next/image";

export type EXPBarProps = {};

export function EXPBar(props: EXPBarProps) {
  const width = 8 * 2;
  const height = 8 * 2;

  const scale = 1;

  return (
    <div className="flex gap-2">
      {F.pipe(
        F.range(14),
        F.map((i: number) => (
          <Image
            key={i}
            src="/images/exp-full.png"
            alt="EXP Bar"
            width={width * scale}
            height={height * scale}
          />
        )),
        F.toArray
      )}
    </div>
  );
}
