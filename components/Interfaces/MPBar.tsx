import Image from "next/image";
import { EmptyBar } from "./EmptyBar";

export type MPBarProps = {};

export function MPBar(_props: MPBarProps) {
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
          src="/images/MP-bar.png"
          alt="MP Bar"
          width={width * scale}
          height={height * scale}
          layout="fixed"
        />
      </div>
      <p className="absolute top-1/4 left-2/4 font-press-start-2p">MP</p>
    </div>
  );
}
