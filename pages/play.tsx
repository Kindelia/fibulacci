import { ConnectButton } from "@rainbow-me/rainbowkit";
import { BlobBlue } from "../components/Creatures/BlobBlue";
import { Player } from "../components/Player";
import { Stage } from "../components/Stages/Principal";
import { useStateQuery } from "../hooks/useStateQuery";

export default function PlayPure() {
  useStateQuery();

  return (
    <>
      {/* <ConnectButton /> */}
      <div className="">
        <Stage>
        <Player />
        <BlobBlue x={10} y={20} side="left" />
      </Stage>
      </div>
    </>
  );
}
