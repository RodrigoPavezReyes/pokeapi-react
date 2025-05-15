import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const PokemonList = ({ currentList }) => {
  const navigate = useNavigate()
  const [detailedList, setDetailedList] = useState([])

  useEffect(() => {
    if (!currentList.results) return

    const fetchDetails = async () => {
      const promises = currentList.results.map(pokemon =>
        fetch(pokemon.url).then(res => res.json())
      )
      const results = await Promise.all(promises)
      setDetailedList(results)
    }

    fetchDetails()
  }, [currentList])

  return (
    <>
      {detailedList.map((pokemon) => (
        <div key={pokemon.id} style={{ border: '1px solid #ccc', padding: 10, margin: 10 }}>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <button onClick={() => navigate(`/pokemon/${pokemon.id}`)}>Detalles</button>
        </div>
      ))}
    </>
  )
}
