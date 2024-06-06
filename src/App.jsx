
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Lista } from "./components/ListaTareas";
import Formulario from "./components/Formulario";  
import { ListaProvaider } from "./context/ListaContext";


function App() {
  return (
    <BrowserRouter>
      <ListaProvaider>
        <Routes>
          <Route path='/' element={<Lista />} />
          <Route path="/formulario" element={<Formulario />} />
        </Routes>
      </ListaProvaider>
    </BrowserRouter>
  )
}




export default App;
