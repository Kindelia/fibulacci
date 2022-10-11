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
    <div className="flex flex-col border-2 border-white" style={{
      width: width * scale,
    }}>
      <EmptyBar />
      <div className="-mt-14" style={{
        width: width * scale,
        height: height * scale,
      }}>
        <Image
          src="/images/hp-bar.png"
          alt="HP Bar"
          width={width * scale}
          height={height * scale}
          objectFit="cover"
        />
      </div>
    </div>
  );
}
