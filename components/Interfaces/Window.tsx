import $ from "@master/literal";
import { FibObject } from "../../hooks/useStateQuery";

import { EXPBar } from "./EXPBar";
import { HPBar } from "./HPBar";
import { WindowSlot } from "./WindowSlot";

export type WindowProps = {
  player: FibObject;
};

export function Window(props: WindowProps) {
  const { player } = props;

  return (
    <div
      className={$`fixed right:0 top:0 w:500 h:100vh`}
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
          bg:round
          bg:no-repeat
          rel
        `}
        >
          <div
            className={$`abs bg:red h:10 w:10 top:${player?.y} left:${player?.x} round @flash|3s|infinite`}
          />
        </div>
        <div className="flex flex:col gap:2">
          <HPBar hp={player?.hp} />
        </div>
        <EXPBar totalEXP={player?.xp_tot} />
        <WindowSlot />
      </div>
    </div>
  );
}
