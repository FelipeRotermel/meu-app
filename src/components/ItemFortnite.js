import { Text, View, StyleSheet } from 'react-native';
export default function ItemFortnite(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>
                {props.guns.nome} {props.guns.dano}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ece6ff',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
    },
    lista:{
      width: '100%' 
    },
    texto: {
      fontSize: 30,
    }
  });