import { Sprite, _ReactPixi } from "@inlet/react-pixi";
import { useWindowSize } from "react-use";
import { EmptyBar } from "./EmptyBar";
import * as F from "@fxts/core";

export type EXPBarProps = {};

export function EXPBar(props: EXPBarProps) {
  const window = useWindowSize();

  const width = 8 * 2;
  const height = 8 * 2;

  const x = window.width - width - 400;
  const y = 500;

  return F.pipe(
    F.range(14),
    F.map((i: number) => (
      <Sprite
        image={"images/exp-full.png"}
        x={x + i * 24}
        y={y}
        width={width}
        height={height}
      />
    )),
    F.toArray
  );
}
