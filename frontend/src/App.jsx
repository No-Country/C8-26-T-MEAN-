import {Route, Routes} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Home from './components/Home'
import Gift from './components/Gift'
import Faq from './components/Faq'
import './styles/App.css'

function App() { //los componentes en React son funciones. Su nombre comienza en mayúscula. Retorna jsx

  return (
    <div className="App">
     <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Gift' element={<Gift/>} />
          <Route path='/Faq' element={<Faq/>} />
     </Routes>
    </div>
  )
}

export default App
