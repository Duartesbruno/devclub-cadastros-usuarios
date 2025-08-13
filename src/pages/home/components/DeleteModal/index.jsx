export default function DeleteModal({ onClose, onDelete, user }) {
    function handleSubmit() {
        onDelete(user.id);
        onClose();
    }

    return (
    <div className="modal-overlay">
        <div className="modal">
        <h2>{`Você deseja excluir "${user.name}" ?`}</h2>  
        <div className="modal-actions">
            <button type="button" onClick={handleSubmit}>Sim</button>
            <button type="button" onClick={onClose}>Não</button>
        </div>
        </div>
    </div>
    );
}