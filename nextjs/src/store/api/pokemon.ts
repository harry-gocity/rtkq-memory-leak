import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Pokemon = {
  species: {
    name: string;
  };
};

// Extra args just help fragment RTKQ cache
export type PokemonArgs = {
  name: string;
  keyA: string;
  keyB: string;
};

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, PokemonArgs>({
      query: ({ name }) => `pokemon/${name}`,
    }),
  }),
});
