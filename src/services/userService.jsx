import api from "../services/api"

export async function getUsers() {
  const res = await api.get('/usuarios')
  return res.data
}

export async function createUser(userData) {
  const res = await api.post('/usuarios', userData)
  return res.data
}

export async function deleteUser(id) {
  await api.delete(`/usuarios/${id}`)
}

export async function editUser(id, updatedData) {
  const res = await api.put(`/usuarios/${id}`, updatedData)
  return res.data
}

