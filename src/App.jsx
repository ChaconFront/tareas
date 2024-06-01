
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Lista } from "./components/ListaTareas";


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Lista />} />{/* pagina principal doonde se van a cargar las tareas */}

      </Routes>
    </BrowserRouter>
  )
}

export default App;
