import axios from 'axios'

const API_URL = 'http://localhost:8080/api/users'

export async function fetchUsers() {
  const response = await axios.get(API_URL)
  return response.data
}

export async function createUser(user) {
  const response = await axios.post(API_URL, user)
  return response.data
}
