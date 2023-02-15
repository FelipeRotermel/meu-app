import {Text, View, StyleSheet } from 'react-native';

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.texto}>Lista de tarefas</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#1d0463',
        padding: 25,
        width: '100%',
        textAlign: 'center',
        justifyContent: 'center',
      },
    texto: {
        color: 'white',
    }
})