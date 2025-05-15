import React from 'react'
import { SearchPokemon } from './SearchPokemon'
import { PokemonFilterCombined } from './PokemonFilterCombined'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
    <Link to="/"><h1>POKEMON APP</h1></Link>
    <SearchPokemon/>
     <PokemonFilterCombined />
    </>
  )
}
