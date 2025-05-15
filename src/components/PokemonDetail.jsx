export const PokemonDetail = ({ pokemon, id, handleAnterior, handleSiguiente }) => {
  return (
    <>
      {pokemon && (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
          <p>Id: {pokemon.id}</p>
          <p>Altura: {pokemon.height}</p>
          <p>Peso: {pokemon.weight}</p>

          <h3>Tipos</h3>
          <ul>
            {pokemon.types.map((typeObj) => (
              <li key={typeObj.type.name}>{typeObj.type.name}</li>
            ))}
          </ul>

          <h3>Habilidades</h3>
          <ul>
            {pokemon.abilities.map((abilityObj) => (
              <li key={abilityObj.ability.name}>
                {abilityObj.ability.name}
              </li>
            ))}
          </ul>

          <h3>Estadísticas Base</h3>
          <ul>
            {pokemon.stats.map((statObj) => (
              <li key={statObj.stat.name}>
                {statObj.stat.name}: {statObj.base_stat}
              </li>
            ))}
          </ul>

          <h3>Movimientos (primeros 5)</h3>
          <ul>
            {pokemon.moves.slice(0, 5).map((moveObj) => (
              <li key={moveObj.move.name}>{moveObj.move.name}</li>
            ))}
          </ul>

          <button onClick={handleAnterior} disabled={id === 1}>
            Anterior
          </button>
          <button onClick={handleSiguiente}>Siguiente</button>
        </div>
      )}
    </>
  );
};
