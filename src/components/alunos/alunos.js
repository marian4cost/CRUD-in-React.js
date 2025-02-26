import styles from "./alunos.module.css"

import React from "react"

class Alunos extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            students : []
        }
    }

    getFunction(){
        fetch("http://localhost:4000/student/")
        .then(response => response.json())
        .then(data => {this.setState({
            students : data
        })})

        alert("dados puxados da api")
    }

    deleteFunction(id){
        fetch("http://localhost:4000/student/"+id, {
            method: "DELETE"
        })
        .then(response => {
            if(response.ok){
                this.getFunction()
            }
            alert("item deletado com sucesso do banco")
        })
    }

    componentDidMount(){
        this.getFunction()
    }
    componentWillUnmount(){}

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
                    {this.state.students.map((student) => (
                        <tr>
                            <th>{student.name}</th>
                            <th>{student.email}</th>
                            <th>Atualizar ou Excluir</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>)
    }
}

export default Alunos
