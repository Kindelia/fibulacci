import { BlobBlue } from "../components/Creatures/BlobBlue";
import { Player } from "../components/Player/Player";
import { PrincipalStage } from "../components/Stages/PrincipalStage";
import { useStateQuery } from "../hooks/useStateQuery";

export default function Play() {
  const { data, isLoading } = useStateQuery();

  if (!data && isLoading) {
    return <p className="f:black f:bold">Carregando...</p>;
  }

  const creatures = [
    {
      type: "player",
      num: "0",
      y: 145,
      sl: "0",
      s5: "0",
      s1: "1",
      xp_tot: "1024",
      cd: "0",
      s7: "45",
      s3: "0",
      x: 47,
      hp: "655",
      gd: "0",
      s6: "0",
      s2: "0",
      rt: "0",
      s0: "107",
      fat: "2473",
      s4: "0",
    },
    {
      type: "player",
      num: "0",
      y: 146,
      sl: "0",
      s5: "0",
      s1: "1",
      xp_tot: "1024",
      cd: "0",
      s7: "45",
      s3: "0",
      x: 48,
      hp: "655",
      gd: "0",
      s6: "0",
      s2: "0",
      rt: "0",
      s0: "107",
      fat: "2473",
      s4: "0",
    },
  ];

  return (
    <PrincipalStage>
      <Player />
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

// 180x180
// 10240x10240