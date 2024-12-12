import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function GameScreen() {
  // Use useLocalSearchParams instead of useSearchParams
  const { sessionCode, playerName } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Game Screen</Text>
      <Text>Session Code: {sessionCode || 'N/A'}</Text>
      <Text>Player Name: {playerName || 'N/A'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Prevent black screen
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});
