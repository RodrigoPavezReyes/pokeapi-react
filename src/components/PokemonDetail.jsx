import { Box, Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";

export const PokemonDetail = ({
  pokemon,
  id,
  handleAnterior,
  handleSiguiente,
}) => {

  return (
     <>
      {pokemon && (
        
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
            
          <Card
            sx={{
              width: '70%',
            }}
          >
            <CardActionArea>
            <Typography
              align="center"
              variant="h3"
              sx={{ textTransform: 'uppercase', mb: 2 }}
            >
              {pokemon.name}
            </Typography>

            <CardMedia
              component="img"
              image={pokemon.sprites.front_default}
              alt={pokemon.name}
              sx={{ width: 200, height: 200, mx: 'auto', mb: 2 }}
            />

            <CardContent sx={{ textAlign: 'center' }}>
              <Typography><strong>Id:</strong> {pokemon.id}</Typography>
              <Typography><strong>Altura:</strong> {pokemon.height}</Typography>
              <Typography><strong>Peso:</strong> {pokemon.weight}</Typography>

              {/* 2) Listas sin puntos */}
              <Typography variant="h6" sx={{ mt: 2 }}>Tipos</Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {pokemon.types.map((typeObj) => (
                  <Box component="li" key={typeObj.type.name}>
                    {typeObj.type.name}
                  </Box>
                ))}
              </Box>

              <Typography variant="h6" sx={{ mt: 2 }}>Habilidades</Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {pokemon.abilities.map((abilityObj) => (
                  <Box component="li" key={abilityObj.ability.name}>
                    {abilityObj.ability.name}
                  </Box>
                ))}
              </Box>

              <Typography variant="h6" sx={{ mt: 2 }}>Estadísticas Base</Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {pokemon.stats.map((statObj) => (
                  <Box component="li" key={statObj.stat.name}>
                    {statObj.stat.name}: {statObj.base_stat}
                  </Box>
                ))}
              </Box>

              <Typography variant="h6" sx={{ mt: 2 }}>Movimientos (primeros 5)</Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {pokemon.moves.slice(0, 5).map((moveObj) => (
                  <Box component="li" key={moveObj.move.name}>
                    {moveObj.move.name}
                  </Box>
                ))}
              </Box>
            </CardContent>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, p: 2 }}>
              <Button
                variant="outlined"
                onClick={handleAnterior}
                disabled={id === 1}
              >
                Anterior
              </Button>
              <Button variant="outlined" onClick={handleSiguiente}>
                Siguiente
              </Button>
            </Box>
            </CardActionArea>
          </Card>
          
        </Box>
      )}
    </>
  );
};
