import { Sprite, _ReactPixi } from "@inlet/react-pixi";
import { useWindowSize } from "react-use";
import { EXPBar } from "./EXPBar";
import { HPBar } from "./HPBar";
import { MPBar } from "./MPBar";
import { WindowSlot } from "./WindowSlot";

type WindowProps = {};

export function Window(props: WindowProps) {
  const window = useWindowSize();

  const width = 500;
  const height = window.height;

  const x = window.width - width;
  const y = 0;

  const newProps: _ReactPixi.ISprite = {
    width,
    height,
    x,
    y,
    ...props,
  };

  return (
    <>
      <Sprite image={"images/window.png"} {...newProps} />
      <HPBar />
      <MPBar />
      <WindowSlot />
    </>
  );
}
