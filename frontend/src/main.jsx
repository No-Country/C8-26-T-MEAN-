
import React from 'react'
import ReactDOM from 'react-dom/client' //para renderizar
import { HashRouter } from 'react-router-dom'
import App from './App'
import { Provider } from "react-redux"
import store from '../src/store/index'
ReactDOM.createRoot(document.getElementById('root')).render( //se selecciona el elemento con ID root del HTML
  <React.StrictMode> {/* el modo estricto de JS permite hacer comprobaciones. El de React es un poco mejor. Sirve para debugear, para el desarrollo.*/}
    {
      /*
      <Auth0Provider
         domain='dev-r7slzto3e5y34sj4.us.auth0.com'
         clientId='lnum2dWU7PHtKsfHakSXjb6woBs5YoEk'
         redirectUri={window.location.origin}
         >
      */
    }
    <Provider store={store}>
      <HashRouter>
        <App /> {/*componente de React. Se renderiza App.jsx*/}
      </HashRouter>
    </Provider>
    {
      /*
      </Auth0Provider>
      */
    }
  </React.StrictMode>
)
