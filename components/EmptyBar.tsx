import { Sprite, _ReactPixi } from "@inlet/react-pixi";
import { useWindowSize } from "react-use";

export type EmptyBarProps = {};

export function EmptyBar(props: EmptyBarProps) {
  const window = useWindowSize();

  const width = 380;
  const height = 70;

  const x = window.width - width - 62;
  const y = 300;

  const newProps: _ReactPixi.ISprite = {
    width,
    height,
    x,
    y,
    ...props,
  };

  return <Sprite image={"images/empty-bar.png"} {...newProps} />;
}
