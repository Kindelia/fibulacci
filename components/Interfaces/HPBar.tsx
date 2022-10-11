import Image from "next/image";
import { useWindowSize } from "react-use";
import { EmptyBar } from "./EmptyBar";
// import { EmptyBar } from "./EmptyBar";

export type HPBarProps = {};

export function HPBar(_props: HPBarProps) {
  const width = 130;
  const height = 18;

  const scale = 3;

  return (
    <div
      style={{
        width: width * scale,
        height: height * scale,
        position: "relative",
      }}
    >
      <EmptyBar />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: width * scale,
          height: height * scale,
          overflow: "hidden",
        }}
      >
        <Image
          src="/images/hp-bar.png"
          alt="HP Bar"
          width={width * scale}
          height={height * scale}
          layout="fixed"
        />
      </div>
      <p className="absolute top-1/4 left-2/4 font-press-start-2p">HP</p>
    </div>
  );
}
