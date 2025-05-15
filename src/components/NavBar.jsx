import React from 'react'
import { SearchPokemon } from './SearchPokemon'
import { PokemonFilterCombined } from './PokemonFilterCombined'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'

export const NavBar = () => {
  return (
    <>
    <Typography variant="h2"align="center" ><Link to="/" >POKEMON APP</Link></Typography>
    
    <SearchPokemon/>
     <PokemonFilterCombined />
    </>
  )
}
