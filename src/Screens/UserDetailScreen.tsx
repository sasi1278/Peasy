import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../services/types';

type UserDetailsRouteProp = RouteProp<RootStackParamList, 'UserDetails'>;

const UserDetails = ({ route }: { route: UserDetailsRouteProp }) => {
  const { firstName, lastName, gender, age, location, email } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>User Details</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.infoText}>{firstName} {lastName}</Text>

        <Text style={styles.label}>Gender:</Text>
        <Text style={styles.infoText}>{gender}</Text>

        <Text style={styles.label}>Age:</Text>
        <Text style={styles.infoText}>{age}</Text>

        <Text style={styles.label}>Location:</Text>
        <Text style={styles.infoText}>{location.city}, {location.state}, {location.country}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.infoText}>{email}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  infoContainer: {
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
    color: '#555',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 15,
    color: '#333',
  },
});

export default UserDetails;
