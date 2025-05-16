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
        background: 'radial-gradient(circle, rgb(222, 214, 64), rgb(182, 179, 0), rgb(255, 0, 0))',
        backgroundSize: '400% 400%',
      }}
    >
    <Container>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/resultados" element={<PokemonResultsPage />} />
          <Route path="/app-react-pokedex" element={<HomePage />} />
          <Route path="/pokemon/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
    </motion.div>
  );
}

export default App;
