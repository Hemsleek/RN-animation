import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {Array(5)
        .fill('😀')
        .map(icon => (
          <Text style={styles.emoji}>{icon}</Text>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    color: 'red',
  },
});

export default App;
