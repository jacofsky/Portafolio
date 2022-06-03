import Certificados from "./components/Certificados"
import Contacto from "./components/Contacto"
import Inicio from "./components/Inicio"
import NavBar from "./components/NavBar"
import Portafolio from "./components/Portafolio"
import Skills from "./components/Skills"

import './styles/index.scss'


function App() {

  return (
    <>
      <NavBar/>
      <Inicio/>
      <Skills/>
      <Portafolio/>
      <Certificados/>
      <Contacto/>
    </>
  )
}

export default App
