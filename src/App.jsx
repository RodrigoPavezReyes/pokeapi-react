
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { DetailPage } from "./pages/DetailPage"
import { SearchPokemon } from "./components/SearchPokemon"
import { PokemonFilterCombined } from "./components/PokemonFilterCombined"
import { PokemonResultsPage } from "./pages/PokemonResultsPage"
import { NavBar } from "./components/NavBar"



function App() {
  

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
            <Route path="/resultados" element={<PokemonResultsPage />} /> 
            <Route path="/" element={<HomePage/>}/>         
            <Route path="/pokemon/:id" element={<DetailPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

