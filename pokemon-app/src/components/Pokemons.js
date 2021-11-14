import React, { useEffect, useState } from "react";

export default function Pokemons() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonName, setPokemonName] = useState("");

  const callPokemon = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200";
    const response = await fetch(URL);
    const data = await response.json();
    setPokemon(data.results);
  };
  console.log(pokemon);
  useEffect(() => {
    callPokemon();
  }, []);
  return (
    <div>
      {pokemon && (
        <div>
          <form action="">
            <select
              onChange={(e) => setPokemonName(e.target.value)}
              name=""
              id=""
            >
              {pokemon.map((a, idx) => (
                <option key={idx} value={a.name}>
                  {a.name}
                </option>
              ))}
            </select>
          </form>
          <h1>{pokemonName}</h1>
        </div>
      )}
    </div>
  );
}
