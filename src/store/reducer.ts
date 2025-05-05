import { pokemonApi } from "@/store/api/pokemon";
import { combineReducers } from "redux";

export const reducer = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});
