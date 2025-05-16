import { useEffect, useState } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  CircularProgress,
} from '@mui/material';

export const PokemonResultsPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [detailedList, setDetailedList] = useState([]);

  useEffect(() => {
    const pokemonNames = searchParams.get("pokemons");
    if (!pokemonNames) return;

    const namesArray = pokemonNames.split(",");

    const fetchDetails = async () => {
      try {
        const promises = namesArray.map((name) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => res.json())
        );
        const results = await Promise.all(promises);
        setDetailedList(results);
      } catch (err) {
        console.error("Error al obtener detalles de los Pokémon", err);
      }
    };

    fetchDetails();
  }, [searchParams]);

  return (
    <Box sx={{ p: 2, width: '100%' }}>
      <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
        Resultados del filtro
      </Typography>

      {detailedList.length === 0 ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
          <Typography sx={{ ml: 2 }}>Cargando Pokémon...</Typography>
        </Box>
      ) : (
        <Grid container spacing={2}>
          {detailedList.map((pokemon) => (
            <Grid key={pokemon.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                    width: '10rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: '0.2s',
                  '&:hover': { transform: 'scale(1.03)' },
                }}
              >
                <CardMedia
                  component="img"
                  image={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  sx={{ width: 120, height: 120, mx: 'auto', mt: 2 }}
                />
                <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{ textTransform: 'uppercase' }}
                  >
                    {pokemon.name}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => navigate(`/pokemon/${pokemon.id}`)}
                  >
                    Ver detalles
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button component={Link} to="/pokeapi-react" variant="outlined">
          Volver Home
        </Button>
      </Box>
    </Box>
    
  );
};
