import './App.css'
import Home from './views/Home'
import NoEncontrada from './views/NoEcontrada'
import { Routes, Route } from 'react-router-dom'
import Contacto from './views/Contacto'
import NavBar from "./components/NavBar";

function App() {
  

  return (
    <>
     <NavBar></NavBar>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='*' element={<NoEncontrada/>}/>
     </Routes>
    </>
  )
}

export default App
