import { useParams, useNavigate } from "react-router-dom";
import { PokemonDetail } from "../components/PokemonDetail";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // ⬅️ para cambiar la URL

  const [pokemon, setPokemon] = useState(null);
  const currentId = Number(id); // ya no usamos setCurrentId

  const handleAnterior = () => {
    if (currentId > 1) {
      navigate(`/pokemon/${currentId - 1}`); // ⬅️ actualiza URL
    }
  };

  const handleSiguiente = () => {
    navigate(`/pokemon/${currentId + 1}`); // ⬅️ actualiza URL
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${currentId}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, [currentId]);

  return (
    <>
      <PokemonDetail
        pokemon={pokemon}
        id={currentId}
        handleAnterior={handleAnterior}
        handleSiguiente={handleSiguiente}
      />
      <hr />
      <Link to="/">
        <button>Volver Home</button>
      </Link>
    </>
  );
};
