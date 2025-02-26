import styles from "./alunos.module.css"

import React from "react"

class Alunos extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            students : [],
            name: "",
            email: ""
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

    deleteFunction = (id) => {
        fetch("http://localhost:4000/student/"+id, {
            method: "DELETE"
        })
        .then(response => {
            if(response.ok){
                this.getFunction()
                alert("item deletado com sucesso do banco")
            }
        })
    }

    atualizationName = (event) => {
        this.setState({name: event.target.value})
    }
    atualizationEmail = (event) => {
        this.setState({email: event.target.value})
    }

    componentDidMount(){
        this.getFunction()
    }

    render(){
        return(<main className={styles.container}>
            <h1>Página de execução</h1>
            <form>
                <label>Nome:</label>
                <input type="text" placeholder="digite o nome do aluno:" value={this.state.name} onChange={this.atualizationName}/>
                <label>E-mail:</label>
                <input type="text" placeholder="digite o e-mail do aluno:" value={this.state.email} onChange={this.atualizationEmail}/>
                <button>Salvar</button>
            </form>
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
                            <th><button>Atualizar</button> <button onClick={() => this.deleteFunction(student.id)}>Excluir</button></th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>)
    }
}

export default Alunos
