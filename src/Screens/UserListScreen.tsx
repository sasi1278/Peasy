import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { fetchUsers} from '../services/APIService';
import { saveUsersToStorage, getUsersFromStorage } from '../services/StorageService';
import { HomeScreenProps } from '../services/types';
import { User} from '../services/types';

const UserListScreen = ({ navigation }: HomeScreenProps) => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const initializeUsers = async () => {
      try {
        const storedUsers = await getUsersFromStorage();
        if (storedUsers) {
          setUsers(storedUsers);
        }
        const fetchedUsers = await fetchUsers();
        const combinedUsers = mergeUniqueUsers(storedUsers || [], fetchedUsers);
        setUsers(combinedUsers);
        await saveUsersToStorage(combinedUsers);
      } catch (error) {
        console.error('Error initializing users:', error);
      }
    };
  
    const fetchAndSaveUsers = async () => {
      try {
        const fetchedUsers = await fetchUsers();
        setUsers((prevUsers) => {
          const combinedUsers = mergeUniqueUsers(prevUsers, fetchedUsers);
          saveUsersToStorage(combinedUsers);
          return combinedUsers;
        });
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
  
    initializeUsers();
    const intervalId = setInterval(fetchAndSaveUsers, 20000);
    return () => clearInterval(intervalId);
  }, []);
  

  const mergeUniqueUsers = (existingUsers: User[], newUsers: User[]) => {
    const emailSet = new Set(existingUsers.map((user) => user?.email));
    const uniqueNewUsers = newUsers.filter((user) => !emailSet.has(user?.email));
    return [...existingUsers, ...uniqueNewUsers];
  };

  const filteredUsers = users.filter((user:User) =>
    user.name.first.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by name"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
      data={filteredUsers}
      keyExtractor={(item, index) => item.email || index.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.userItem}
          onPress={() =>
            navigation.navigate('UserDetails', {
              firstName: item.name.first,
              lastName: item.name.last,
              gender: item.gender,
              age: item.dob.age,
              location: item.location,
              email:item.email,
            })
          }
          
        >
          <Text style={styles.userName}>
            {item.name.first} {item.name.last}
          </Text>
          <Text style={styles.userAge}>Age: {item.dob.age}</Text>
        </TouchableOpacity>
      )}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  userItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userAge: {
    fontSize: 14,
    color: '#555',
  },
});

export default UserListScreen;
