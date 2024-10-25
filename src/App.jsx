import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Importación de los componentes
import Modal from './components/navigation/Modal';
import Agregarpr from './components/products/Agregarpr';
import Carrousel from './components/navigation/Carrousel';
import Head from './components/navigation/Head';
import Foot from './components/navigation/Foot';
import RegisterPage from './pages/RegisterPage.jsx'; 


const App = () => {
  return (
    <Router>
      {/* Agregar el componente de encabezado */}
      <Head />

      {/* Definir las rutas del proyecto */}
      <Routes>
        {/* Ruta principal que muestra el componente Carrousel */}
        <Route path='/' element={<Carrousel />} />

        {/* Ruta para mostrar el modal */}
        <Route path='/gg' element={<Modal />} />

        {/* Ruta para agregar productos */}
        <Route path='/regispro' element={<Agregarpr />} />
     
     {/* Ruta para agregar usuarios */}
     <Route path='/registroU' element={<RegisterPage />} />
    
      </Routes>

      <Foot />
    </Router>
  );
}

export default App;
