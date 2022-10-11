import { Sprite, _ReactPixi } from "@inlet/react-pixi";
import Image from "next/image";
import { useWindowSize } from "react-use";

export type MPBarProps = {};

export function MPBar(props: MPBarProps) {
  const width = 130;
  const height = 18;

  const scale = 3;

  return (
    <Image
      src="/images/mp-bar.png"
      alt="HP Bar"
      width={width * scale}
      height={height * scale}
    />
  );
}
