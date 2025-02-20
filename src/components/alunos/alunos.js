import styles from "./alunos.module.css"

import React from "react"

class Alunos extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            alunos : [
                {"id": 0, "name": "mariana", "email": "mariana.costa.lisboa078@gmail.com"},
                {"id": 1, "name": "joão", "email": "joão@teste.com"}
            ]
        }
    }

    render(){
        return(<main className={styles.container}>
            <h1>Página de execução</h1>
            <table>
                <thead>
                    <tr>
                        <th>NOME</th>
                        <th>E-MAIL</th>
                        <th>OPÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{this.state.alunos[0].name}</th>
                        <th>{this.state.alunos[0].email}</th>
                        <th>Atualizar ou Excluir</th>
                    </tr>
                </tbody>
            </table>
        </main>)
    }
}

export default Alunos
