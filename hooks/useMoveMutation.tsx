import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "../utils/axios";

export function useMoveMutation() {
//   const id = 727;
//   const x = 0o0;
//   const y = 0o4;

//   // 727 Moves up 
//   // 100100000000001011010111 = #9437911
//   // // 001011010111 = id 727
//   // // 0000         = command move
//   // // 10010000     = Coordinate (0, -1)


//   const command = `${x}${y}${0o4}${id}`;

//   const data = `
//     run {
//         ask x = (Call 'Fib' {Fib_Act #${command}});
//         (Done x)
//     }
//   `;

//   return useMutation("moveMutation", () =>
//     client.post("/publish", data).then((res) => res.data)
//   );
}
