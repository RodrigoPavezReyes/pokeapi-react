import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { DetailPage } from "./pages/DetailPage";
import { PokemonResultsPage } from "./pages/PokemonResultsPage";
import { NavBar } from "./components/NavBar";
import { Container } from "@mui/material";
import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div
      initial={{ backgroundPosition: '0% 0%' }}
  animate={{ backgroundPosition: '100% 50%' }}
  transition={{
    duration: 30,
    repeat: Infinity,
    ease: 'linear',
  }}
  style={{
    minHeight: '100vh',
    background: 'linear-gradient(270deg, #f3ec78,rgb(228, 132, 48))',
    backgroundSize: '400% 400%',
  }}
    >
    <Container>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/resultados" element={<PokemonResultsPage />} />
          <Route path="/PokedexReact" element={<HomePage />} />
          <Route path="/pokemon/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
    </motion.div>
  );
}

export default App;
