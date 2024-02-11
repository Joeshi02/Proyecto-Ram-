import Navbar from "./componentes/Navbar/Navbar"
import Inicio from "./componentes/Inicio/Inicio"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NextUIProvider } from "@nextui-org/react"
import Footer from "./componentes/Footer/Footer"
import Profesionales from "./componentes/Profesionales/Profesionales"



function App() {

  return (
    <>
      <NextUIProvider>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/professionals" element={<Profesionales />} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </NextUIProvider>
    </>
  )
}

export default App
