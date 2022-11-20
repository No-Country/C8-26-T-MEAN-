import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Gift from './components/Gift'
import Faq from './components/Faq'
import Login from './components/Login'
import Products from './components/Products'
import Categories from './components/Categories'

function App() { //los componentes en React son funciones. Su nombre comienza en mayúscula. Retorna jsx

  return (
    <div className="App">
     <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Categories' element={<Categories/>} />
          <Route path='/Gift' element={<Gift/>} />
          <Route path='/Faq' element={<Faq/>} />
          <Route path='/Products' element={<Products/>} />
     </Routes>
    </div>
  )
}

export default App
