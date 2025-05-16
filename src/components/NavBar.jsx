import React from "react";
import { SearchPokemon } from "./SearchPokemon";
import { PokemonFilterCombined } from "./PokemonFilterCombined";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import logo from "../assets/logo.svg";
import { motion } from "framer-motion";

export const NavBar = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Link to="/" style={{ textDecoration: "none" }}>
              <motion.img
                  src={logo}
                  alt="Logo"
                  initial={{ x: 5, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  style={{ width: 250, height: "auto", cursor: "pointer", marginRight: "1rem" }}
                />
            </Link>
      
    </Box>
      <SearchPokemon />
      <PokemonFilterCombined />
    </>
  );
};
