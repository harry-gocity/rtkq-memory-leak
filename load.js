async function fetchPokemonNames(limit = 100) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  const data = await res.json();
  return data.results.map((p) => p.name);
}

function randomKey(length = 10) {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from(
      { length },
      () => chars[Math.floor(Math.random() * chars.length)],
  ).join("");
}

(async () => {
  const pokemonNames = await fetchPokemonNames(100);

  setInterval(async () => {
    const name = pokemonNames[Math.floor(Math.random() * pokemonNames.length)];
    const keyA = randomKey();
    const keyB = randomKey();

    const url = new URL("http://localhost:3000");
    url.searchParams.append("name", name);
    url.searchParams.append("keyA", keyA);
    url.searchParams.append("keyB", keyB);

    console.log(url.toString());

    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.error(`Request failed: ${res.status}`);
      }
    } catch (err) {
      console.error("Fetch error:", err.message);
    }
  }, 500); // every .5 second
})();
