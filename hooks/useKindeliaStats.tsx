import { useQuery } from "@tanstack/react-query";
import { client } from "../utils/axios";

export function useKindeliaStats() {
  return useQuery(["requestTest"], () =>
    client.get("/stats").then((res) => res.data)
  );
}
