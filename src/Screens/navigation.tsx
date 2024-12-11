import React from 'react';
import UserListScreen from './UserListScreen';
import UserDetailScreen from './UserDetailScreen';
import HomeScreen from './Start';
import { RootStackParamList } from '../services/types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="UserList" component={UserListScreen} />
      <Stack.Screen name="UserDetails" component={UserDetailScreen} />
    </Stack.Navigator>
  );
}
