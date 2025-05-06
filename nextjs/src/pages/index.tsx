import { pokemonApi, PokemonArgs } from "@/store/api/pokemon";
import { wrapper } from "@/store/configureStore";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const { data, isSuccess } = pokemonApi.useGetPokemonByNameQuery(
    router.query as PokemonArgs,
  );

  if (!isSuccess) {
    return null;
  }

  return (
    <div>
      <h3>{data.species.name}</h3>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const name = context.query.name as string;
    const keyA = context.query.keyA as string;
    const keyB = context.query.keyB as string;

    if (!name) {
      return { notFound: true };
    }

    void store.dispatch(
      pokemonApi.endpoints.getPokemonByName.initiate({ name, keyA, keyB }),
    );
    await Promise.all(store.dispatch(pokemonApi.util.getRunningQueriesThunk()));

    return {
      props: {},
    };
  },
);
