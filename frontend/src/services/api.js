import axios from 'axios';

export const getUsers = () => {
  return axios.get('/api/users');
};

export const createUser = (user) => {
  return axios.post('/api/users', user);
};