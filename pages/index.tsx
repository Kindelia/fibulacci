import { Stage } from "@inlet/react-pixi";
import Head from "next/head";
import { useWindowSize } from "react-use";

import Map from "./components/game/maps/Map";
import Blob from "./components/game/mobs/Blob";
import { usePlayer } from "./hooks/usePlayer";

export default function Home() {
  const player = usePlayer();
  const window = useWindowSize();

  return (
    <div>
      <Head>
        <title>Fibulacci - Kindelia Dapp's</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Stage
          width={window.width}
          height={window.height}
          options={{
            backgroundColor: 0x1099bb,
          }}
        >
          <Map>
            <Blob side="right" x={player.x} y={player.y} />
            <Blob side="left" x={200} y={400} />
            <Blob side="left" x={250} y={303} />
            <Blob side="right" x={400} y={500} />
          </Map>
        </Stage>
      </main>
    </div>
  );
}
