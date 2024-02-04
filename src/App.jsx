import Navbar from "./componentes/Navbar/Navbar"
import Inicio from "./componentes/Inicio"
import { BrowserRouter } from "react-router-dom"
import { NextUIProvider } from "@nextui-org/react"



function App() {


  return (
    <>
      <BrowserRouter>
        <NextUIProvider>
          <Navbar/>
          <Inicio />
        </NextUIProvider>
      </BrowserRouter>


    </>
  )
}

export default App
