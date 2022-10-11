import useSound from "use-sound";

export type BlobProps = {
  side: "left" | "right";
  x: number;
  y: number;
  scale?: number;
  size?: number;
};

export function Blob(props: BlobProps) {
  const { side, x, y, scale, size } = {
    scale: 1,
    side: "right",
    size: 32,
    ...props,
  };

  const [play] = useSound("/sounds/blob-voice.mp3", { volume: 0.9 });

  return (
    <div
      className="animate-blob absolute cursor-pointer"
      style={{
        backgroundImage: `url("/images/blob-${side}.png")`,
        width: size * scale,
        height: size * scale,
        top: y,
        left: x,
      }}
      onClick={() => play()}
    />
  );
}
