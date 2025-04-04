import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>
      {/* <link to="Login"/> Login <link/> | <link to="Cadastro"/> Cadastro <link/> */}
    </nav>
      <Outlet/>
    </>
  )
}

export default App
