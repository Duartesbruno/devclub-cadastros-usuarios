import { useState } from "react"

export default function EditModal({ user, onClose, onSave }) {
    const [name, setName] = useState(user.name || "");
    const [age, setAge] = useState(user.age || "");
    const [email, setEmail] = useState(user.email || "");

    function handleSubmit() {
        onSave(user.id, {name, age, email});
        onClose();
    }

    return (
    <div className="modal-overlay">
        <div className="modal">
        <h2>Editar Usuário</h2>
        <input name="nome" value={name} autoComplete="name" onChange={(e) => setName(e.target.value)} />
        <input name="idade" type="number" value={age} autoComplete="off" onChange={(e) => setAge(e.target.value)} />
        <input name="email" type="email" value={email} autoComplete="email" onChange={(e) => setEmail(e.target.value)} />
        
        <div className="modal-actions">
            <button type="button" onClick={handleSubmit}>Salvar</button>
            <button type="button" onClick={onClose}>Cancelar</button>
        </div>
        </div>
    </div>
    );
}
