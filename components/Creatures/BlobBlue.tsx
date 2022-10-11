import { useWindowSize } from "react-use";
import { twMerge } from "tailwind-merge";

export type BlobBlueProps = {
  side: "left" | "right";
  x: number;
  y: number;
  scale?: number;
  isAnimated?: boolean;
};

export function BlobBlue(props: BlobBlueProps) {
  const window = useWindowSize();

  const { isAnimated, side, x, y, scale } = {
    scale: 1,
    x: 0,
    y: 0,
    side: "right",
    ...props,
  };

  return (
    <div
      className={twMerge(
        `bg-blob-blue-${side}`,
        "animate-blob w-8 h-8 absolute"
      )}
    />
  );
}
