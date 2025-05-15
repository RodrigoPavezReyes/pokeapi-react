
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { DetailPage } from "./pages/DetailPage"


function App() {
  

  return (
    <BrowserRouter>
      <h1>Pokemon App</h1>
      <Routes>
            <Route path="/" element={<HomePage/>}/>         
            <Route path="/pokemon/:id" element={<DetailPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

