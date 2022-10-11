import * as F from "@fxts/core";
import { Sprite } from "@inlet/react-pixi";
import Image from "next/image";
import { useWindowSize } from "react-use";

type WindowSlotProps = {};

export function WindowSlot(_props: WindowSlotProps) {
  const size = 32;
  const scale = 2.8;

  return (
    <div className="flex flex-row flex-wrap w-[400px] justify-center items-center">
      {F.pipe(
        F.range(16),
        F.map((i: number) => (
          <Image
            key={i}
            src="/images/window-slot.png"
            alt="Window Slot"
            width={size * scale}
            height={size * scale}
            // scale={2}
            // x={x + i * 64}
            // y={y + j * 64}
          />
        )),
        F.toArray
      )}
    </div>
  );
}
