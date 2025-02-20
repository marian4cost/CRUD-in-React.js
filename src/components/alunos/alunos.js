import styles from "./alunos.module.css"

import React from "react"

class Alunos extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            alunos : []
        }
    }

    render(){
        return(<main className={styles.container}>
            <h1>Página de execução</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Teste</th>
                        <th>teste@teste.com</th>
                        <th>Atualizar ou Excluir</th>
                    </tr>
                    <tr>
                        <th>Teste</th>
                        <th>teste@teste.com</th>
                        <th>Atualizar ou Excluir</th>
                    </tr>
                </tbody>
            </table>
        </main>)
    }
}

export default Alunos
