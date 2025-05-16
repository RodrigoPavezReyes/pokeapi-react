import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@mui/material';

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
    <Box sx={{ p: 2, width: '100%', borderRadius: 2,  }}>
      {/* Título */}
      <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
        Encuentra tu Pokemon por Tipo y Habilidad
      </Typography>

      {/* Controles de filtro */}
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
        
        {/* Select de tipo */}
        <FormControl sx={{ minWidth: 180 }}>
          <InputLabel id="label-tipo">Tipo</InputLabel>
          <Select
            labelId="label-tipo"
            value={selectedType}
            label="Tipo"
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <MenuItem value="">
              <em>Todos</em>
            </MenuItem>
            {types.map((t) => (
              <MenuItem key={t.name} value={t.name}>
                {t.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Select de habilidad */}
        <FormControl sx={{ minWidth: 180 }}>
          <InputLabel id="label-habilidad">Habilidad</InputLabel>
          <Select
            labelId="label-habilidad"
            value={selectedAbility}
            label="Habilidad"
            onChange={(e) => setSelectedAbility(e.target.value)}
          >
            <MenuItem value="">
              <em>Todos</em>
            </MenuItem>
            {abilities.map((a) => (
              <MenuItem key={a.name} value={a.name}>
                {a.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Botón de filtrar */}
        <Button
          variant="contained"
          size="large"
          onClick={handleFilter}
          sx={{ height: 56 }}
        >
          Filtrar
        </Button>
      </Box>

      

      {/* Error */}
      {error && (
        <Typography variant="body2" color="error" align="center">
          {error}
        </Typography>
      )}
    </Box>
  );
};
