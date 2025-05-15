import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
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
    
    <Grid container spacing={12} justifyContent="center" rowSpacing={4} >
        {detailedList.map((pokemon) => (

        <Grid  key={pokemon.id} xs={12} sm={6} md={4} lg={3}>  
        <Card 
        sx={{ 
            transition: "0.2s",
            "&:hover":{
                transform:"scale(1.05)",
            },
            }}>
        <CardActionArea>
        <CardContent>
          <Typography align="center" variant='h6' sx={{ textTransform: 'uppercase' }}>{pokemon.name}</Typography>
          
          <CardMedia 
            component={"img"}
            image={pokemon.sprites.front_default || "/fallback.png"}
            onError={(e) => e.target.src = "/fallback.png"}
            alt={pokemon.name}
            sx={{ width: 100, height: 100, margin: '0 auto' }}
           />
              </CardContent>
        </CardActionArea>  
        
           <CardActions sx={{ justifyContent: 'center' }}>
                <Button  variant="contained" onClick={() => navigate(`/pokemon/${pokemon.id}`)}>Detalles</Button>
            </CardActions>
     
        
        </Card> 
       </Grid>
      ))} 
    </Grid>
    
  )
}
