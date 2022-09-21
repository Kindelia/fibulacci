import { useEffect, useRef } from "react";

export type CanvasProps = React.ComponentProps<"canvas"> & {
  draw: (context: CanvasRenderingContext2D) => void;
};

export function Canvas(props: CanvasProps) {
  const { draw, ...rest } = props;

  const canvas = useRef();

  useEffect(() => {
    const context = canvas?.current?.getContext("2d");
    draw(context);
  });

  return <canvas ref={canvas} {...rest} />;
}
