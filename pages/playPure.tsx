import { BlobBlue } from "../components/Creatures/BlobBlue";
import { Player } from "../components/Player";
import { Sprite } from "../components/Sprite";
import { Stage } from "../components/Stages/Principal";
import { useStateQuery } from "../hooks/useStateQuery";

export default function PlayPure() {
  useStateQuery()

  return (
    <Stage>
      <Player />
    </Stage>
  );
}
