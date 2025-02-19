import styles from "./home.module.css"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function Home(){
    return(<main className={styles.container}>
        <h1>Sistema de Cadastro de Alunos</h1>
        <p>Seja bem-vindo ao sistema de cadastro de alunos</p>
        <button><Link to={"/alunos"} className={styles.link}>Cadastrar Aluno</Link></button>
    </main>)
}

export default Home
