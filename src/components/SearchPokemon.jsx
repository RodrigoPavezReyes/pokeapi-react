import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button } from '@mui/material';
import { motion } from "framer-motion"

const container = (delay)=> ({
    hidden: {x: -100, opacity:0},
    visible : {
        x:0,
        opacity:1,
        transition: {duration: 0.6, delay:delay}
    }
})

export const SearchPokemon = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      navigate(`/pokemon/${inputValue.toLowerCase().trim()}`);
      setInputValue("");
    }
  };

  return (
    <motion.div
    variants={container(0.5)}
                                    initial="hidden"
                                    animate="visible">
                                      
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        flexWrap: 'wrap',
        mb: 4,
        px: 2,
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Busca tu Pokémon por nombre o ID"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        sx={{
    width: {
      xs: '100%',   // full width en móviles
      sm: '350px',  // 250px en sm y superior
    },
    maxWidth: '350px',  // nunca pase de 300px
  }}
      />

      <Button
        variant="contained"
        type="submit"
        sx={{
          height: 56,          // coincide con la altura del TextField
          whiteSpace: 'nowrap' // evita que el texto se parta
        }}
      >
        Buscar
      </Button>
    </Box>
    </motion.div>
  );
};
