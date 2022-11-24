import $ from "@master/literal";
import { useWindowSize } from "react-use";

import { EXPBar } from "./EXPBar";
import { HPBar } from "./HPBar";
import { WindowSlot } from "./WindowSlot";

type WindowProps = {
  x: number;
  y: number;
};

export function Window(props: WindowProps) {
  const { x, y } = props;

  const window = useWindowSize();

  const left = {
    2560: 2240,
    1920: 1680,
    1440: 1260,
    1280: 1120,
    1024: 900,
    800: 700,
    640: 560,
    320: 280,
  }[window.width];

  return (
    <div
      className={$`left:${left} top:${y - 488} w:500 h:100vh abs`}
      style={{
        borderImageSource: "url(/images/window.png)",
        borderImageSlice: "24 24 24 24 fill",
        borderImageWidth: "24px 24px 24px 24px",
      }}
    >
      <div className="flex flex:col h:100vh jc:space-around ai:center">
        <div
          className={$`
          w:3/4
          h:150
          bg:orange-80 
          flex 
          bg:url('/images/maps/world-terrain.png')
          bg:cover
          bg:no-repeat
          rel
          bg:
        `}
        >
          <div className="abs bg:red h:10 w:10 top:10 left:10 round @flash|2s|infinite" />
        </div>
        <div className="flex flex:col gap:2">
          <HPBar />
        </div>
        <EXPBar />
        <WindowSlot />
        <input
          placeholder="ID do player"
          className="b:1|solid|white p:20 rounded"
        />
      </div>
    </div>
  );
}
