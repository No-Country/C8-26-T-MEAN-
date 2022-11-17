//Este es el archivo principal que nos permite renderizar el proyecto en el navegador.

import React from 'react'
import ReactDOM from 'react-dom/client' //para renderizar
import App from './App'

import './index.css'
//import Login from './Login'
//import './styles/index.css'
//import 'mdb-react-ui-kit/dist/css/mdb.min.css';
//import "@fortawesome/fontawesome-free/css/all.min.css";
import {HashRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render( //se selecciona el elemento con ID root del HTML
     <HashRouter>
            <App /> 
       </HashRouter>
  
)
