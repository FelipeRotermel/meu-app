import { StatusBar } from 'expo-status-bar';
import Header from './src/components/Header';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const tasks = [
                 {nome: 'ASSAULT RIFLE', dano:'36'},
                 {nome: 'MAKESHIFT RIFLE', dano:'33'},
                 {nome: 'PRIMAL RIFLE', dano:'36'},
                ];
  return (
    <View style={styles.container}>
      <Header />
      <View>
      <FlatList style={styles.lista}
        data={tasks}
        renderItem={({ item }) => <Text style={styles.texto}>{item.nome}    {item.dano}</Text>}
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
    textAlign: 'center',
  },
  lista:{
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  texto: {
    fontSize: 30,
    padding: 10,
  }
});