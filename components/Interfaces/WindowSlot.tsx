import * as F from "@fxts/core";
import $ from "@master/literal";

type WindowSlotProps = {};

export function WindowSlot(_props: WindowSlotProps) {
  const scale = 2.8;
  const size = 32 * scale;

  return (
    <div className="flex flex:row flex:wrap w:400 jc:center ai:center">
      {F.pipe(
        F.range(16),
        F.map((i: number) => (
          <div
            className={$`
              bg:url('/images/window-slot.png')
              w:${size}
              h:${size}
              bg:cover
              bg:no-repeat
            `}
            key={i}
          />
        )),
        F.toArray
      )}
    </div>
  );
}
