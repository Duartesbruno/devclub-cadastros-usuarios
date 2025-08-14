import { useState, useEffect, useRef } from "react"
import { useUsers } from "../../hooks/useUsers"
import Form from "./components/Form"
import Card from "./components/Card"
import EditModal from "./components/EditModal"
import DeleteModal from "./components/DeleteModal" 
import "./styles.css"

function Home() {
  const { users, handleCreateUser, handleDeleteUser, handleEditUser } = useUsers()

  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false)

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  const onCreate = () => {
    const name = inputName.current.value.trim();
    const age = inputAge.current.value.trim();
    const email = inputEmail.current.value.trim();

    if (!name || !age || !email) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (isNaN(age) || Number(age) <= 0) {
      alert("Idade deve ser um número positivo.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Digite um e-mail válido.");
      return;
    }

    handleCreateUser({ name, age, email });

    inputName.current.value = '';
    inputAge.current.value = '';
    inputEmail.current.value = '';
  };

  function openEditModal(user) {
    setSelectedUser(user)
    setIsEditModalOpen(true)
  }

  function openDeleteModal(user) {
    setSelectedUser(user)
    setIsDeleteConfirmOpen(true)
  }
  
useEffect(() => {
  if (isEditModalOpen || isDeleteConfirmOpen) {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '15px';
  } else {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }
  return () => {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }
}, [isEditModalOpen, isDeleteConfirmOpen]);

  return (
    <div className="container">
      <Form
        inputName={inputName}
        inputAge={inputAge}
        inputEmail={inputEmail}
        onCreate={onCreate}
      />
      {users.map((user, idx) => (
        <div className="container-card" key={`${idx}-${user.id}`}>
          <Card
            user={user}
            openEditModal={openEditModal}
            openDeleteModal={openDeleteModal}
          />
        </div>
      ))}
      {isEditModalOpen && (
        <EditModal
          user={selectedUser}
          onClose={() => setIsEditModalOpen(false)}
          onSave={handleEditUser}
        />
      )}
      {isDeleteConfirmOpen && (
        <DeleteModal 
          onClose={() => setIsDeleteConfirmOpen(false)}
          onDelete={handleDeleteUser}
          user={selectedUser}
        />
      )}
    </div>
  );
}

export default Home;
