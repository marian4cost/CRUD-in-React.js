import './App.css'
import Home from './components/home'
import Alunos from './components/alunos'
import {BrowserRouter, Routes, Route,Link} from 'react-router-dom'

function App() {
  return(<>
    <BrowserRouter>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/alunos"}>Cadastrar Alunos</Link></li>
      </ul>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/alunos' element={<Alunos/>}/>
      </Routes>
    </BrowserRouter>
  </>)
}

export default App
