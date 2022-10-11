import { EXPBar } from "./EXPBar";
import { HPBar } from "./HPBar";
import { MPBar } from "./MPBar";
import { WindowSlot } from "./WindowSlot";

type WindowProps = {};

export function Window(props: WindowProps) {
  return (
    <div
      className="absolute right-0 top-0"
      style={{
        borderImageSource: "url(/images/window.png)",
        borderImageSlice: "24 24 24 24 fill",
        borderImageWidth: "24px 24px 24px 24px",
        width: 500,
        height: "100vh",
      }}
    >
      <div className="flex flex-col h-screen justify-center items-center gap-10">
        <div className="flex flex-col gap-2">
          <HPBar />
          <MPBar />
        </div>
        <EXPBar />
        <WindowSlot />
      </div>
    </div>
  );
}
