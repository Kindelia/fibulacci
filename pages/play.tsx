import { ConnectButton } from "@rainbow-me/rainbowkit";
import { BlobBlue } from "../components/Creatures/BlobBlue";
import { Player } from "../components/Player";
import { PrincipalStage } from "../components/Stages/PrincipalStage";
import { useStateQuery } from "../hooks/useStateQuery";

export default function PlayPure() {
  useStateQuery();

  return (
    <>
      <ConnectButton />
        <PrincipalStage>
          <Player />
          <BlobBlue x={50} y={70} side="left" />
        </PrincipalStage>
    </>
  );
}
