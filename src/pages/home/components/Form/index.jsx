import './styles.css'

export default function Form({ inputName, inputAge, inputEmail, onCreate }) {

    return (
        <form className="form">
            <h1>Cadastro de Usuários</h1>
            <input name="nome" type="text" placeholder="Nome" ref={inputName} autoComplete="name"/>
            <input name="idade" type="number" placeholder="Idade" ref={inputAge} autoComplete="off"/>
            <input name="email" type="email" placeholder="E-mail" ref={inputEmail} autoComplete="email"/>
            <button type="button" onClick={onCreate}>Cadastrar</button>
        </form>
    )
}