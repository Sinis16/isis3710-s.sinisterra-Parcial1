import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Encabezado from './components/Encabezado';
import InicioSesion from './components/InicioSesion';
import Carros from './components/Carros';


function App() {
  return (
    <div className="App">
      
        <Router>
        <Encabezado/>
          <Routes>
          <Route path="/" element={<InicioSesion />} />
          <Route path="/" element={<Carros />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
