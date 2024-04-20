import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa Routes
import LoginPage from './views/LoginPage'; // Importa tu componente LoginPage
import RegistroPage from './views/RegistroPage'; // Importa tu componente RegistroPage
import Detalles from './views/Detalles';
import PedidoEstadoPage from './views/PedidosEstado';

const App = () => {
  return (
    <BrowserRouter>
      <Routes> {/* Envuelve tus rutas en el componente Routes */}
        <Route exact path="/" element={<LoginPage />} /> {/* Usa el atributo element con el componente */}
        <Route path="/registroEmpresa" element={<RegistroPage />} /> {/* Usa el atributo element con el componente */}
        <Route path="/detalles" element={<Detalles />} /> 
        <Route path="/pedidos_estado" element={<PedidoEstadoPage />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
