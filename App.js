import { StatusBar } from 'expo-status-bar';
import Header from './src/components/Header';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const tasks = ['Tarefa 1', 'Tarefa 2', 'Tarefa 3', 'Tarefa 4', 'Tarefa 5', 'Tarefa 6', 'Tarefa 7']
  return (
    <View style={styles.container}>
      <Header />
      <View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ece6ff',
    alignItems: 'center',
  },
});