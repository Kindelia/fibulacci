import { EXPBar } from "./EXPBar";
import { HPBar } from "./HPBar";
import { WindowSlot } from "./WindowSlot";

type WindowProps = {};

export function Window(props: WindowProps) {
  return (
    <div
      className="abs right:0 top:0 w:500 h:100vh"
      style={{
        borderImageSource: "url(/images/window.png)",
        borderImageSlice: "24 24 24 24 fill",
        borderImageWidth: "24px 24px 24px 24px",
      }}
    >
      <div className="flex flex:col h:100vh jc:space-around ai:center gap:10">
        <div className="w:3/4 h:150 bg:orange-80 flex jc:center ai:center">
          <p>MINIMAP</p>
        </div>
        <div className="flex flex:col gap:2">
          <HPBar />
        </div>
        <EXPBar />
        <WindowSlot />
      </div>
    </div>
  );
}
