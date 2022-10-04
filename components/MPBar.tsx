import { Sprite, _ReactPixi } from "@inlet/react-pixi";
import { useWindowSize } from "react-use";

export type MPBarProps = {};

export function MPBar(props: MPBarProps) {
  const window = useWindowSize();

  const width = 380;
  const height = 70;

  const x = window.width - width - 62;
  const y = 370;

  const newProps: _ReactPixi.ISprite = {
    width,
    height,
    x,
    y,
    ...props,
  };

  return <Sprite image={"images/mp-bar.png"} {...newProps} />;
}
