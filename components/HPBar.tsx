import { Sprite, _ReactPixi } from "@inlet/react-pixi";
import { useWindowSize } from "react-use";
import { EmptyBar } from "./EmptyBar";

export type HPBarProps = {};

export function HPBar(props: HPBarProps) {
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

  return (
    <>
      <Sprite image={"images/hp-bar.png"} {...newProps} />
      <EmptyBar />
    </>
  );
}
