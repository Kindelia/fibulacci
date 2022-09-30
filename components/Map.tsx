import { Sprite } from "@inlet/react-pixi";

export type MapProps = {
    children: React.ReactNode;
};

export function Map(props: MapProps) {
  const { children } = props;

  return (
    <>
      <Sprite image="images/maps/map.png" width={686} height={686} />
      {children}
    </>
  );
}
