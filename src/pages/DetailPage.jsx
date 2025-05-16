import { useParams, useNavigate } from "react-router-dom";
import { PokemonDetail } from "../components/PokemonDetail";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const DetailPage = () => {
  const { id } = useParams();  // ⬅️ id viene de la URL y puede ser nombre o número
  const navigate = useNavigate(); // ⬅️ para cambiar la URL

  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 

  const numericId = Number(pokemon?.id || 0); // para Anterior/Siguiente

  const handleAnterior = () => {
    if (numericId > 1) {
      navigate(`/pokemon/${numericId - 1}`); // ⬅️ actualiza URL
    }
  };

  const handleSiguiente = () => {
    navigate(`/pokemon/${numericId + 1}`); // ⬅️ actualiza URL
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id.toLowerCase()}`);
        if (!res.ok) throw new Error("Pokémon no encontrado");
        const data = await res.json();
        setPokemon(data);
      } catch (err) {
        setError(err.message);
        setPokemon(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  return (
    <>
      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && pokemon && (
        <>
          <PokemonDetail
            pokemon={pokemon}
            id={numericId}
            handleAnterior={handleAnterior}
            handleSiguiente={handleSiguiente}
          />
        </>
      )}
      <Link to="/PokedexReact" style={{ textDecoration: "none" }}>
  <Button variant="contained" color="primary">
    Volver Home
  </Button>
</Link>
    </>
  );
};
