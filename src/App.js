import styles from './App.module.css'

import Home from './components/home/home'
import Alunos from './components/alunos/alunos'

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return(<main className={styles.container}>
    <BrowserRouter>
      <ul className={styles.navbar}>
        <li><Link to={"/"} className={styles.link}>Home</Link></li>
        <li><Link to={"/alunos"} className={styles.link}>Cadastrar Alunos</Link></li>
      </ul>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/alunos' element={<Alunos/>}/>
      </Routes>
    </BrowserRouter>
  </main>)
}

export default App
