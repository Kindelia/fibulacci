import { useEffect, useRef } from "react";

export type CanvasProps = React.ComponentProps<"canvas"> & {
  draw: (context: CanvasRenderingContext2D) => void;
};

export function Canvas(props: CanvasProps) {
  const { draw, ...rest } = props;

  const ref = useRef();

  useEffect(() => {
    const canvas = ref.current as HTMLCanvasElement;
    const context = canvas.getContext("2d");

    if (!context) return;

    draw(context);
  }, []);

  return <canvas ref={ref} {...rest} />;
}
