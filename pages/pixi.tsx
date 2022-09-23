import { Stage } from "@inlet/react-pixi";
import { useState } from "react";
import { useKey } from "react-use";

import Map from "./components/game/maps/Map";
import Blob from "./components/game/mobs/Blob";

export default function Test() {
  const initialState = {
    movements: [],
    mapLimit: 500,
    player: {
      x: 200,
      y: 300,
      speed: 20,
    },
  };

  const [state, setState] = useState<typeof initialState>(initialState);

  useKey("ArrowUp", () =>
    setState((prev) => ({
      ...prev,
      player: {
        ...prev.player,
        y:
          prev.player.y > 0
            ? prev.player.y - 1 * prev.player.speed
            : prev.player.y,
      },
      movements: [...prev.movements, "ArrowUp"],
    }))
  );

  useKey("ArrowDown", () =>
    setState((prev) => ({
      ...prev,
      player: {
        ...prev.player,
        y:
          prev.player.y < prev.mapLimit
            ? prev.player.y + 1 * prev.player.speed
            : prev.player.y,
      },
      movements: [...prev.movements, "ArrowDown"],
    }))
  );

  useKey("ArrowRight", () =>
    setState((prev) => ({
      ...prev,
      player: {
        ...prev.player,
        x:
          prev.player.x < prev.mapLimit
            ? prev.player.x + 1 * prev.player.speed
            : prev.player.x,
      },
      movements: [...prev.movements, "ArrowRight"],
    }))
  );

  useKey("ArrowLeft", () =>
    setState((prev) => ({
      ...prev,
      player: {
        ...prev.player,
        x:
          prev.player.x < prev.mapLimit
            ? prev.player.x - 1 * prev.player.speed
            : prev.player.x,
      },
      movements: [...prev.movements, "ArrowLeft"],
    }))
  );

  return (
    <Stage
      width={1000}
      height={1000}
      options={{
        backgroundColor: 0x1099bb,
      }}
    >
      <Map>
        <Blob side="right" x={state.player.x} y={state.player.y} />
        <Blob side="left" x={200} y={400} />
        <Blob side="left" x={250} y={303} />
        <Blob side="right" x={400} y={500} />
      </Map>
    </Stage>
  );
}
