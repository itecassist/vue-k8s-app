import api from './axios'

export const registerUser = async (data) => {
  await api.post('/auth/register', data)
}

export const loginUser = async (data) => {
  const response = await api.post('/auth/login', data)
  return response.data.token
}