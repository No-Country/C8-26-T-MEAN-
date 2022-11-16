//Este es el archivo principal que nos permite renderizar el proyecto en el navegador.

import React from 'react'
import ReactDOM from 'react-dom/client' //para renderizar
import App from './App'
import Login from './Login'
import './styles/index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

ReactDOM.createRoot(document.getElementById('root')).render( //se selecciona el elemento con ID root del HTML
  <React.StrictMode> {/* el modo estricto de JS permite hacer comprobaciones. El de React es un poco mejor. Sirve para debugear, para el desarrollo.*/}
    <App /> {/*componente de React. Se rederiza App.jsx*/}
    <Login />
  </React.StrictMode>
)
