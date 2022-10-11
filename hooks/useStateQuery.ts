import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/axios";
import state from '../mocks/stateMock.json'

export function useStateQuery() {
  return useQuery(["stateQuery"], () =>
    api.get("functions/Fit/state").then((res) => res.data)
  );

  // return state;
}
