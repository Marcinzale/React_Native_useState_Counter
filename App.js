import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, Pressable } from 'react-native';

export default function App() {
  const [count, setCounter] = useState(0);

  const increament = () => (
    setCounter(count + 1)
  )

  const decreament = () => (
    setCounter(count - 1)
  )


  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 80 }}>{count}</Text>

      <View style={styles.pressables}>
        <Pressable onPress={() => { increament(); Alert.alert('Added') }}>
          <Text style={styles.textIncreament}>Increament</Text>
        </Pressable>

        <Pressable onPress={() => { decreament(); Alert.alert('Subtracted') }} >
          <Text style={styles.textDecreament}>Decreament</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressables: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'red',

  },
  textIncreament: {
    color: 'green',
    fontSize: 20,
    margin: 16,
  },
  textDecreament: {
    color: 'red',
    fontSize: 20,
    margin: 16,
  },
});
