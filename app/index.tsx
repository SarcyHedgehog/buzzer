import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const router = useRouter();
  const [sessionCode, setSessionCode] = useState('');
  const [playerName, setPlayerName] = useState('');

  const handleJoinSession = () => {
    if (sessionCode && playerName) {
      console.log(`Navigating to /game with sessionCode: ${sessionCode} and playerName: ${playerName}`);
      router.push({
        pathname: '/game',
        params: { sessionCode, playerName },
      });
    } else {
      console.error('Session Code or Player Name is missing');
    }
  };

  const handleCreateNewSession = () => {
    const newSessionCode = Math.random().toString(36).substr(2, 5).toUpperCase();
    setSessionCode(newSessionCode);
    handleJoinSession();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Buzzer!</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Session Code"
        placeholderTextColor="#aaa"
        value={sessionCode}
        onChangeText={setSessionCode}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Your Name"
        placeholderTextColor="#aaa"
        value={playerName}
        onChangeText={setPlayerName}
      />
      <Button title="Join Session" onPress={handleJoinSession} disabled={!sessionCode || !playerName} />
      <Button title="New Session" onPress={handleCreateNewSession} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 8,
    width: '80%',
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#000',
  },
});
