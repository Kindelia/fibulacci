import { useEffect, useRef } from "react";

export type CanvasProps = React.ComponentProps<"canvas"> & {
  draw: (context: CanvasRenderingContext2D) => void;
  state: any;
};

export function Canvas(props: CanvasProps) {
  const { draw, state, ...rest } = props;

  const ref = useRef();

  function tick() {
    const canvas = ref.current as HTMLCanvasElement;
    const context = canvas.getContext("2d");

    if (!context) return;

    draw(context);

    requestAnimationFrame(tick);
  }
  
  useEffect(() => {
   requestAnimationFrame(tick);
  }, [state]);

  return <canvas ref={ref} {...rest} />;
}
