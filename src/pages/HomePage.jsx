import React, { useEffect, useState } from 'react'
import { PokemonList } from '../components/PokemonList'
import { Box, Button } from '@mui/material';

export const HomePage = () => {

    const [currentList, setCurrentList] = useState({})

    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=15&offset=0");
    const [nextUrl, setNextUrl] = useState("")
    const [prevUrl, setPrevUrl] = useState("")

    
    const handleAnterior = () => {
        if (prevUrl) {
            setUrl(prevUrl)
        }
        
    }

    const handleSiguiente = () => {
        if (nextUrl) {
            setUrl(nextUrl)
        }
    }   


    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setCurrentList(data);
            setNextUrl(data.next);
            setPrevUrl(data.previous);
            console.log(data)
    })
    }, [url])
    

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, mt: 4 }}>
  <PokemonList currentList={currentList} />

  <Box sx={{ display: 'flex', gap: 2 }}>
    <Button variant="contained" color="primary" onClick={handleAnterior}>
      Anterior
    </Button>
    <Button variant="contained" color="primary" onClick={handleSiguiente}>
      Siguiente
    </Button>
  </Box>
</Box>
  )
}
