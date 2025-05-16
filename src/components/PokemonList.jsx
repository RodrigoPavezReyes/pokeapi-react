import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';



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
  <Grid container columnSpacing={10} rowSpacing={4} sx={{ width: '100%', marginTop: '2rem', marginBottom:"2rem" }}>
    {detailedList.map((pokemon) => (
      <Grid key={pokemon.id} xs={12} sm={6} md={4} lg={3}>
        <motion.div
          initial={{x:5, opacity:0}} 
          animate={{X:0, opacity:1}}
          transition={{duration:2, delay:.2}}
          
        >
          <Card
  sx={{
    width: '10rem',
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
      borderRadius: '16px',
    },
  }}
>
  <CardActionArea onClick={() => navigate(`/pokemon/${pokemon.id}`)}>
    <CardContent>
      <Typography align="center" variant='h6' sx={{ textTransform: 'uppercase' }}>
        {pokemon.name}
      </Typography>
      <CardMedia
        component="img"
        image={pokemon.sprites.front_default}
        alt={pokemon.name}
        sx={{ width: 100, height: 100, margin: '0 auto' }}
      />
    </CardContent>
  </CardActionArea>

  {/* Botón fuera del CardActionArea */}
  <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
    <Button
      variant="outlined"
      onClick={() => navigate(`/pokemon/${pokemon.id}`)}
    >
      Detalles
    </Button>
  </Box>
</Card>

        </motion.div>
      </Grid>
    ))}
  </Grid>
);
}
