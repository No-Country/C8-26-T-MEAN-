import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Gift from './components/Gift'
import Faq from './components/Faq'
import Products from './components/Products'
import { useAuth0 } from '@auth0/auth0-react'
import Categories from './components/Categories'
import LoginButton from './components/Login'
import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile'


function App() { //los componentes en React son funciones. Su nombre comienza en mayúscula. Retorna jsx

  const {isAuthenticated} = useAuth0();
    
  return (

    <div className="App">
      {
        isAuthenticated ? <LogoutButton/> : <LoginButton/>
      }
      <Profile/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Categories' element={<Categories/>} />
          <Route path='/Gift' element={<Gift/>} />
          <Route path='/Faq' element={<Faq/>} />
          <Route path='/Products' element={<Products/>}/>
          
      </Routes>

    </div>
  )
}

export default App
