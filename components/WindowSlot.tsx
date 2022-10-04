import * as F from "@fxts/core";
import { Sprite } from "@inlet/react-pixi";
import { useWindowSize } from "react-use";

type WindowSlotProps = {};

export function WindowSlot(_props: WindowSlotProps) {
    const window = useWindowSize();

  const x = window.width - 380;
  const y = 500;

  return (
    <>
      {F.pipe(
        F.range(4),
        F.map((i: number) =>
          F.pipe(
            F.range(4),
            F.map((j: number) => (
              <Sprite
                key={i + j}
                image={"images/window-slot.png"}
                scale={2}
                x={x + i * 64}
                y={y + j * 64}
              />
            )),
            F.toArray
          )
        ),
        F.toArray
      )}
    </>
  );
}
