import { NavigationProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  UserList: undefined;
  UserDetails: { 
    firstName: string;
    lastName: string;
    gender: string;
    age: number;
    location: {
      city: string;
      state: string;
      country: string;
    };
    email: string;
  };
};

export interface HomeScreenProps {
  navigation: NavigationProp<RootStackParamList, 'Home'>;
}

export interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

export interface ApiResponse<T> {
  results: T[];
}

