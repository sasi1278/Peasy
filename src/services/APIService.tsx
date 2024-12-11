import axios from 'axios';
import { ApiResponse, User } from './types';

type UserApiResponse = ApiResponse<User>

export const fetchUsers = async (results: number = 20): Promise<User[]> => {
  const response = await axios.get(`https://randomuser.me/api/?results=${results}`);
  return response.data.results;
};
