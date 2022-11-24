import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Gift from './components/Gift'
import Faq from './components/Faq'
import Products from './components/Products'
import Categories from './components/Categories'
// import LoginButton from './components/Login'
// import LogoutButton from './components/LogoutButton'
// import Profile from './components/Profile'
import DetailProduct from './components/DetailProduct'
import Purchase from './components/Purchase'

function App() { //los componentes en React son funciones. Su nombre comienza en mayúscula. Retorna jsx

  

  return (

    <div className="App">
      
      

      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Categories' element={<Categories/>} />
          <Route path='/Gift' element={<Gift/>} />
          <Route path='/Faq' element={<Faq/>} />
          <Route path='/Products' element={<Products/>} />
          <Route path='/DetailProduct/:id' element={<DetailProduct/>} />
          <Route path='/Purchase' element={<Purchase/>} />
      </Routes>
    </div>
  )
}

export default App