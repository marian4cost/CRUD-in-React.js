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

    // REQUISIÇÃO DO TIPO GET
    getFunction(){
        fetch("http://localhost:4000/student/")
        .then(response => response.json())
        .then(data => {this.setState({
            students : data
        })})

        alert("dados puxados da api")
    }

    // REQUISIÇÃO DO TIPO DELETE
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

    // REQUISIÇÃO DO TIPO POST
    postFunction = (studentContent) => {
        fetch("http://localhost:4000/student/", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(studentContent)
        })
        .then(response => {
            if(response.ok){
                this.getFunction()
                alert("item adicionado com sucesso do banco")
            }else{
                alert("algo deu errado")
            }
        })
    }

    // FUNÇÕES NECESSÁRIAS PARA REQUISIÇÕES DO TIPO POST
    atualizationName = (event) => {
        this.setState({name: event.target.value})
    }
    atualizationEmail = (event) => {
        this.setState({email: event.target.value})
    }
    submit = (event) => {
        event.preventDefault()
        
        const studentContent = {
            name: this.state.name,
            email: this.state.email
        }

        this.postFunction(studentContent)
    }

    // COMPONENTE DE REINICIALIZAÇÃO DE PÁGINA 9POR PADRÃO EXIBI O GET
    componentDidMount(){
        this.getFunction()
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
                    {this.state.students.map((student) => (
                        <tr>
                            <th>{student.name}</th>
                            <th>{student.email}</th>
                            <th><button>Atualizar</button> <button onClick={() => this.deleteFunction(student.id)}>Excluir</button></th>
                        </tr>
                    ))}
                </tbody>
            </table>
            <form onSubmit={this.submit}>
                <label>Nome:</label>
                <input type="text" placeholder="digite o nome do aluno:" value={this.state.name} onChange={this.atualizationName}/>
                <label>E-mail:</label>
                <input type="text" placeholder="digite o e-mail do aluno:" value={this.state.email} onChange={this.atualizationEmail}/>
                <button type="submit">Salvar</button>
            </form>
        </main>)
    }
}

export default Alunos
