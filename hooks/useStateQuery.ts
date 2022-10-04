import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/axios";

export function useStateQuery() {
  const data = `
      run {
        ask x = (Call 'Fib' {Fib_Act #${""}});
        (Done x)
      }
    `;

  return useQuery(["stateQuery"], () =>
    api.post("/run", data).then((res) => res.data)
  );
}
