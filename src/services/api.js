import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://localhost:3000' //local
  baseURL: 'https://api-devclub-cadastros-usuarios.onrender.com/'
});

export default api;