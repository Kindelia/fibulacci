import Head from "next/head";
import { useState } from "react";
import { useKey } from "react-use";

import { Canvas } from "./components/Canvas";
import { blob05 } from "./constants";
import { Castle } from "./game/maps/castle";
import { Blob } from "./game/mobs/blob";

export default function Home() {
  const initialState = {
    movements: [],
    mapLimit: 500,
    player: {
      x: 200,
      y: 300,
    },
  };

  const [state, setState] = useState<typeof initialState>(initialState);

  useKey("ArrowUp", () =>
    setState((prev) => ({
      ...prev,
      player: {
        ...prev.player,
        y: prev.player.y > 0 ? prev.player.y - 1  : prev.player.y,
      },
      movements: [...prev.movements, "ArrowUp"],
    }))
  );

  useKey("ArrowDown", () =>
    setState((prev) => ({
      ...prev,
      player: {
        ...prev.player,
        y: prev.player.y < prev.mapLimit ? prev.player.y + 1 : prev.player.y,
      },
      movements: [...prev.movements, "ArrowDown"],
    }))
  );

  useKey("ArrowRight", () =>
    setState((prev) => ({
      ...prev,
      player: {
        ...prev.player,
        x: prev.player.x > prev.mapLimit ? ++prev.player.x : prev.player.x,
      },
      movements: [...prev.movements, "ArrowRight"],
    }))
  );

  useKey("ArrowLeft", () =>
    setState((prev) => ({
      ...prev,
      player: {
        ...prev.player,
        x: prev.player.x < prev.mapLimit ? --prev.player.x : prev.player.x,
      },
      movements: [...prev.movements, "ArrowLeft"],
    }))
  );

  console.log(JSON.stringify(state, null, 2));

  const player1 = new Blob({
    name: "Player Blob 1",
    x: state.player.x,
    y: state.player.y,
  });

  const player2 = new Blob({
    name: "Player Blob 2",
    x: 325,
    y: 300,
  });

  const castle = new Castle();

  function draw(context: CanvasRenderingContext2D) {
    context.clearRect(0, 0, 400, 400);

    castle.draw(context);

    player1.drawWithAnimated(context);
    player2.draw(context);
  }

  console.log("RENDER RENDER");

  return (
    <div>
      <Head>
        <title>Fibulacci - Kindelia Dapp's</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <StartScreen /> */}
        <Canvas draw={draw} state={state} width={1000} height={900} />
      </main>
    </div>
  );
}
