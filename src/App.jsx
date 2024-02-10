import Navbar from "./componentes/Navbar/Navbar"
import Inicio from "./componentes/Inicio/Inicio"
import { BrowserRouter } from "react-router-dom"
import { NextUIProvider } from "@nextui-org/react"



function App() {


  return (
    <>
      <NextUIProvider>
        <BrowserRouter>
          <Navbar />
          <Inicio />
        </BrowserRouter>
      </NextUIProvider>
    </>
  )
}

export default App
