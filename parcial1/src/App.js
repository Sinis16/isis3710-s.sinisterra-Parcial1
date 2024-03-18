import React from 'react';
import logo from './logo.svg';
import './App.css';
import {IntlProvider} from 'react-intl';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Encabezado from './components/Encabezado';
import InicioSesion from './components/InicioSesion';
import Carros from './components/Carros';

import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";


function App() {
  const language =
      (navigator && navigator.language && navigator.language.split(/[-_]/)[0]) ||
      "en";
  return (
    <IntlProvider
          locale={language}
          messages={language === "es" ? localeEsMessages : localeEnMessages}
        >
          <div className="App">
            
              <Router>
              <Encabezado/>
                <Routes>
                <Route path="/" element={<InicioSesion />} />
                <Route path="/carros" element={<Carros />} />
                </Routes>
              </Router>
          
        </div>
    </IntlProvider>
  );
}

export default App;
