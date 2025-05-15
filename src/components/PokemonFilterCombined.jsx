import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const PokemonFilterCombined = () => {
  const [types, setTypes] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedAbility, setSelectedAbility] = useState("");
  
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  // Obtener tipos y habilidades para los selects
  useEffect(() => {
    const fetchFilters = async () => {
      const [typeRes, abilityRes] = await Promise.all([
        fetch("https://pokeapi.co/api/v2/type"),
        fetch("https://pokeapi.co/api/v2/ability"),
      ]);
      const typeData = await typeRes.json();
      const abilityData = await abilityRes.json();
      setTypes(typeData.results);
      setAbilities(abilityData.results);
    };

    fetchFilters();
  }, []);

  const handleFilter = async () => {
  if (!selectedType || !selectedAbility) {
    setError("Selecciona ambos filtros");
    return;
  }

  try {
    const [typeRes, abilityRes] = await Promise.all([
      fetch(`https://pokeapi.co/api/v2/type/${selectedType}`),
      fetch(`https://pokeapi.co/api/v2/ability/${selectedAbility}`),
    ]);

    if (!typeRes.ok || !abilityRes.ok) {
      throw new Error("Error al filtrar");
    }

    const typeData = await typeRes.json();
    const abilityData = await abilityRes.json();

    const typePokemon = typeData.pokemon.map((p) => p.pokemon.name);
    const abilityPokemon = abilityData.pokemon.map((p) => p.pokemon.name);

    const intersection = typePokemon.filter((name) =>
      abilityPokemon.includes(name)
    );

    if (intersection.length === 0) {
      setError("No se encontraron coincidencias");
      return;
    }

    // Redirige con los nombres como query param
    const query = intersection.join(",");
    navigate(`/resultados?pokemons=${query}`);
  } catch (err) {
    console.error(err);
    setError("Error al obtener datos");
  }
};

  return (
    <div>
      <h2>Filtrar Pokémon por tipo y habilidad</h2>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
          <option value="">-- Selecciona un tipo --</option>
          {types.map((type) => (
            <option key={type.name} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>

        <select value={selectedAbility} onChange={(e) => setSelectedAbility(e.target.value)}>
          <option value="">-- Selecciona una habilidad --</option>
          {abilities.map((ability) => (
            <option key={ability.name} value={ability.name}>
              {ability.name}
            </option>
          ))}
        </select>

        <button onClick={handleFilter}>Filtrar</button>
      </div>

      <hr />

      {error && <p style={{ color: "red" }}>{error}</p>}

    </div>
  );
};
