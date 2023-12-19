import authApi from '../libs/axios';

export const loginRequest = async (email: string, password: string) => {
  return authApi.post('http://localhost:3000/login', { email, password });
};

export const profileRequest = async () => {
  return await authApi.get('http://localhost:3000/profile');
};
