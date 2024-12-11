import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from './types';
import { ApiResponse } from './types';
const STORAGE_KEY = 'USER_DATA';

type UserApiResponse = ApiResponse<User>

export const saveUsersToStorage = async (users: User[]): Promise<void> => {
  try {
    const data = JSON.stringify(users);
    await AsyncStorage.setItem(STORAGE_KEY, data);
  } catch (error) {
    console.error('Error saving users', error);
  }
};

export const getUsersFromStorage = async (): Promise<User[]> => {
  try {
    const storedData = await AsyncStorage.getItem(STORAGE_KEY);
    if (storedData) {
      try {
        return JSON.parse(storedData);
      } catch (parseError) {
        console.error('Error parsing data from AsyncStorage:', parseError);
        return [];
      }
    }
    return [];
  } catch (error) {
    console.error('Error retrieving users from AsyncStorage:', error);
    return [];
  }
};
