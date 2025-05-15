import React, { useEffect, useState } from 'react'
import { PokemonList } from '../components/PokemonList'

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
    <div>
        <PokemonList currentList={currentList}  />
        <hr />
        <button onClick={handleAnterior}>Anterior</button>
        <button onClick={handleSiguiente}>Siguiente</button>
    </div>
  )
}
