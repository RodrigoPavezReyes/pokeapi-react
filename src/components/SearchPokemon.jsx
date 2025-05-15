import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchPokemon = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      navigate(`/pokemon/${inputValue.toLowerCase().trim()}`);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Busca tu Pokémon por nombre o ID"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button variant="outlined" type="submit" >Buscar</Button>
    </form>
  );
};
