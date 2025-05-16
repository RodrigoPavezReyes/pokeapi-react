import React from "react";
import { SearchPokemon } from "./SearchPokemon";
import { PokemonFilterCombined } from "./PokemonFilterCombined";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import logo from "../assets/logo.svg";

export const NavBar = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
  <Link to="/PokedexReact" style={{ textDecoration: "none" }}>
    <Box
      component="img"
      src={logo}
      alt="Logo"
      sx={{ width: 250, height: "auto", cursor: "pointer", mr: 3}}
    />
  </Link>
  <SearchPokemon />
</Box>

      <PokemonFilterCombined />
    </>
  );
};
