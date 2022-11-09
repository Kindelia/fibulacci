import { useStore } from "@nanostores/react";
import { useEffect } from "react";
import { useInterval } from "react-use";

import { BlobBlue } from "../components/Creatures/BlobBlue";
import { Player } from "../components/Player/Player";
import { PrincipalStage } from "../components/Stages/PrincipalStage";
import { useSkillMutation } from "../hooks/useSkillMutation";
import { useStateQuery } from "../hooks/useStateQuery";
import { gameStore } from "../stores/gameStore";

export default function Play() {
  const game = useStore(gameStore);
  const skillMutation = useSkillMutation();

  useInterval(() => {
    skillMutation.mutate({
      skillId: "0",
      playerId: "1",
      playerCurrentPosition: {
        x: player.x,
        y: player.y,
      },
      targetPosition: {
        x: creature.x,
        y: creature.y,
      },
    });
  }, 10000);

  const { data, isLoading } = useStateQuery();

  if (!data && isLoading) {
    return <p className="f:black f:bold">Carregando...</p>;
  }

  const player = data.find((item) => item.num === "1");
  const creature = data.find((item) => item.num === "0");

  console.log(
    JSON.stringify(
      {
        player,
        creature,
      },
      null,
      4
    )
  );

  const creatures = [creature];

  return (
    <PrincipalStage>
      <Player player={player} />
      {creatures?.map((creature) => (
        <BlobBlue
          x={Number(creature.x) * 32}
          y={Number(creature.y) * 32}
          hp={creature.hp}
          side="right"
        />
      )) ?? []}
    </PrincipalStage>
  );
}
