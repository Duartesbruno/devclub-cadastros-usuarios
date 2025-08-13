import DeleteIcon from "../../../../assets/deleteicon.svg"     
import EditIcon from "../../../../assets/editicon.svg"
import './styles.css';

export default function Card({ user, openEditModal, openDeleteModal }) {
    return (
        <div className="card">
            <div>
                <p>Nome: <span>{user.name}</span></p>
                <p>Idade: <span>{user.age}</span></p>
                <p>Email: <span>{user.email}</span></p>
            </div>
            <div>
                <button type="button">
                    <img src={EditIcon} alt="Editar" title="Editar" onClick={() => openEditModal(user)}/>
                </button>
                <button type="button">
                    <img src={DeleteIcon} alt="Excluir" title="Excluir" onClick={() => openDeleteModal(user)}/>
                </button>
            </div>
        </div>
    )
}