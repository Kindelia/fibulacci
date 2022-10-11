import { twMerge } from "tailwind-merge";

export type BlobProps = {
  side: "left" | "right";
  x: number;
  y: number;
  scale?: number;
  isAnimated?: boolean;
};

export function Blob(props: BlobProps) {
  const size = 32;

  const { isAnimated, side, x, y, scale } = {
    scale: 1,
    side: "right",
    ...props,
  };

  console.log(props)

  console.log(`left-[${x * size}px]`);

  return (
    <div
      className={twMerge(
        "animate-blob w-8 h-8 absolute",
        `bg-blob-${side}`,
        `left-[${64}px]`,
        `bottom-[${32 * 50}px]`,
      )}
    />
  );
}
