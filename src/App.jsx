import Navbar from "./componentes/Navbar/Navbar"
import Inicio from "./componentes/Inicio"
import { BrowserRouter } from "react-router-dom"



function App() {


  return (
    <>
      <BrowserRouter>
          <Navbar/>
          <Inicio />
      </BrowserRouter>


    </>
  )
}

export default App
