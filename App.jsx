import { Route, Routes } from "react-router-dom"
import "./App.css"
import StarsBackground from "./components/StarsBackground/StarsBackground"
import Characters from "./pages/Characters/Characters"
import Character from "./pages/Character/Character"
import Game from "./components/Game/Game"

const App = () => {
  return (
    <>
      <StarsBackground />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/character/:id" element={<Character />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </>
  )
}

export default App;

/* REQUISITOS PROYECTO
- utilizar react-router-dom
- responsive
- buenas practicas html y css
- trabajar con componentes
- props
- rutas y links
- jsx
*/