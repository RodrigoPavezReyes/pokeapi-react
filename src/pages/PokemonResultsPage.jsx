import { useEffect, useState } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";

export const PokemonResultsPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [detailedList, setDetailedList] = useState([]);

  useEffect(() => {
    const pokemonNames = searchParams.get("pokemons");
    if (!pokemonNames) return;

    const namesArray = pokemonNames.split(",");

    const fetchDetails = async () => {
      try {
        const promises = namesArray.map((name) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => res.json())
        );
        const results = await Promise.all(promises);
        setDetailedList(results);
      } catch (err) {
        console.error("Error al obtener detalles de los Pokémon", err);
      }
    };

    fetchDetails();
  }, [searchParams]);

  return (
    <div>
      <h2>Resultados del filtro</h2>
      {detailedList.length === 0 ? (
        <p>Cargando Pokémon...</p>
      ) : (
        detailedList.map((pokemon) => (
          <div key={pokemon.id} style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <button onClick={() => navigate(`/pokemon/${pokemon.id}`)}>Ver detalles</button>
          </div>
        ))
      )}
      <hr />
      <Link to="/">
        <button>Volver Home</button>
      </Link>
    </div>
    
  );
};
