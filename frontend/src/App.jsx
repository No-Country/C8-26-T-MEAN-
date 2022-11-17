import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home'
import {Route, Routes} from 'react-router-dom'
import Gift from './components/Gift'
import Faq from './components/Faq'
import Products from './components/Products'

function App() { //los componentes en React son funciones. Su nombre comienza en mayúscula. Retorna jsx


  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Gift' element={<Gift/>} />
          <Route path='/Faq' element={<Faq/>} />
          <Route path='/Products' element={<Products/>}/>
      </Routes>
    </div>
  )
}

export default App
