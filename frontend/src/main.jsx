//Este es el archivo principal que nos permite renderizar el proyecto en el navegador.

import React from 'react'
import ReactDOM from 'react-dom/client' //para renderizar
import { HashRouter } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render( //se selecciona el elemento con ID root del HTML
  <React.StrictMode> {/* el modo estricto de JS permite hacer comprobaciones. El de React es un poco mejor. Sirve para debugear, para el desarrollo.*/}
    <HashRouter>
      <App /> {/*componente de React. Se renderiza App.jsx*/}
    </HashRouter>
  </React.StrictMode>
)
