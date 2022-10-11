export type BlobBlueProps = {
  side: "left" | "right";
  x: number;
  y: number;
  scale?: number;
};

export function BlobBlue(props: BlobBlueProps) {
  const size = 32;

  const { side, x, y, scale } = {
    scale: 1,
    side: "right",
    ...props,
  };

  return (
    <div
      className="animate-blob absolute"
      style={{
        backgroundImage: `url("/images/blob-blue-${side}.png")`,
        width: size * scale,
        height: size * scale,
        top: y,
        left: x,
      }}
    />
  );
}
