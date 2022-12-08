import { useMutation } from "wagmi";
import kindelia from "@kindelia/kindelia-js";
import { NODE_URL } from "../utils/env";
import { FIB_CONTRACT, FIB_CONTRACT_NAME } from "../utils/contract";
import axios from "axios";

enum Skill {
  "Fireball" = 0,
}

type Position = {
  x: number;
  y: number;
};

type SkillMutation = {
  playerId: string;
  skillId: string;
  playerCurrentPosition: Position;
  targetPosition: Position;
};

export function useSkillMutation() {
  return useMutation(
    ["skillMutation"],
    async ({
      playerId,
      skillId,
      playerCurrentPosition,
      targetPosition,
    }: SkillMutation) => {
      const code = await (await axios.get("/contracts/act_skill.kdl")).data
    
      // const code = `
      //   run {
      //       let code = (${FIB_CONTRACT.FIB_KDL_SKLL} 
      //         #${playerCurrentPosition.x} 
      //         #${playerCurrentPosition.y}
      //         #${targetPosition.x}
      //         #${targetPosition.y}
      //         #${playerId}
      //         #${skillId} 
      //       );

      //       ask x = (Call '${FIB_CONTRACT_NAME}' {${FIB_CONTRACT.FIB_ACT_ACT} code});
      //       (Done x)
      //   }
      // `;

      return kindelia
        .sendInteract({
          nodeURL: NODE_URL,
          code,
          isPublish: true,
        })
        .then((res) => res.data);
    }
  );
}
