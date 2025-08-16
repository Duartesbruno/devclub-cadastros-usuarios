import { useState, useEffect } from "react"
import { getUsers, createUser, deleteUser, editUser } from "../services/userService"

export function useUsers() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  // load users
  useEffect(() => {
    (async () => {
      setLoading(true)
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
         console.error("Erro ao carregar usuários:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleCreateUser = async (userData) => {
    const newUser = await createUser(userData);
    setUsers((prev) => [...prev, newUser]);
  };

  const handleEditUser = async (id, updatedData) => {
    const updatedUser = await editUser(id, updatedData);
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? updatedUser : user))
    );
  };

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return {
    users,
    handleCreateUser,
    handleDeleteUser,
    handleEditUser,
    loading
  }
}