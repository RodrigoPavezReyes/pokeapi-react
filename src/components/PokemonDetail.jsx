import { Box, Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { motion } from "framer-motion";

const container = (delay)=> ({
    hidden: {x: -100, opacity:0},
    visible : {
        x:0,
        opacity:1,
        transition: {duration: 0.6, delay:delay}
    }
})
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
            
          <Card sx={{ maxWidth: '100%', borderRadius: '16px' }}>
  <CardActionArea>
    <motion.div
  variants={container(0.2)}
  initial="hidden"
  animate="visible"
  style={{
    width: '100%',       // Que el contenedor use todo el ancho disponible
    maxWidth: '600px',   // Ancho máximo para no ser demasiado grande
    margin: '0 auto',    // Centrado horizontal
    padding: '0 16px',   // Espacio lateral para móviles
    boxSizing: 'border-box',
  }}
>
  <Typography
    align="center"
    variant="h3"
    sx={{
      textTransform: 'uppercase',
      mb: 3,
      mt: 5,
      fontSize: { xs: '1.6rem', sm: '2.5rem', md: '3rem' }, // Tamaños responsivos
    }}
  >
    {pokemon.name}
  </Typography>
</motion.div>

    <motion.img
  src={pokemon.sprites.other['official-artwork'].front_default}
  alt={pokemon.name}
  initial={{ x: 5, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 2, delay: 0.2 }}
  style={{
    margin: '0 auto 16px',
    display: 'block',
    
    maxWidth: '100%',  // Añade esta línea para limitar el ancho máximo
    height: 'auto',    // Añade esta línea para que el alto se ajuste automáticamente
  }}
/>

    <CardContent sx={{ textAlign: 'center' }}>
      <Typography><strong>Id:</strong> {pokemon.id}</Typography>
      <Typography><strong>Altura:</strong> {pokemon.height}</Typography>
      <Typography><strong>Peso:</strong> {pokemon.weight}</Typography>

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
  </CardActionArea>

  {/* ✅ Botones FUERA del CardActionArea */}
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
</Card>

          
        </Box>
      )}
    </>
  );
};
