import './App.css';
import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Menu from './pages/Menu'
import Contacto from './pages/Contacto'
import PageNotFound from './pages/PageNotFound'
import Informacion from './pages/Informacion';


function App() {
  return (
        <Routes>
        <Route path='/' element={<Inicio /> } />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/informacion' element={<Informacion />} />
        <Route path="*" element={<PageNotFound />} />
        </Routes>
 

  );
}

export default App;