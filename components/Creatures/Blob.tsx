export type BlobProps = {
  side: "left" | "right";
  x: number;
  y: number;
  scale?: number;
};

export function Blob(props: BlobProps) {
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
        backgroundImage: `url("/images/blob-${side}.png")`,
        width: size * scale,
        height: size * scale,
        top: y,
        left: x,
      }}
    />
  );
}
