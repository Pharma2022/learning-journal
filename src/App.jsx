
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Journal from './pages/Journal'
import About from './pages/About'
import Home from './pages/Home'
function App() {


  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/journal' element={<Journal/>} />
      </Route>
    </Routes>
  )
}

export default App
