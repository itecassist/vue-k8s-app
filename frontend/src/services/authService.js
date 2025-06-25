import api from './axios'

export const registerUser = async (data) => {
  await api.post('/api/auth/register', data)
}

export const loginUser = async (data) => {
  const response = await api.post('/api/auth/login', data)
  return response.data.token
}