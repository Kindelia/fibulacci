import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/axios";

export function useStateQuery() {
  return useQuery(["stateQuery"], () =>
    api.get("functions/Fit/state").then((res) => res.data)
  );
}
