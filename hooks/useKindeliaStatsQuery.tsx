import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/axios";

export function useKindeliaStatsQuery() {
  return useQuery(["kindeliaStatsQuery"], () => api.post("/stats").then((res) => res.data));
}
