import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/App.css'

function App() { //los componentes en React son funciones. Su nombre comienza en mayúscula. Retorna jsx

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    </div>
  )
}

export default App
