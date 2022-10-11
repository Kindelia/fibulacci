import Image from "next/image";

export type EmptyBarProps = {};

export function EmptyBar(_props: EmptyBarProps) {
  const width = 130;
  const height = 18;

  const scale = 3;

  return (
    <Image
      src="/images/empty-bar.png"
      alt="Empty Bar"
      width={width * scale}
      height={height * scale}
    />
  );
}
