import {Text, View, StyleSheet } from 'react-native';
import { Component } from 'react';

export default class extends Component {
    render() {
        return(
            <View style={styles.header}>
                <Text style={styles.texto}>{this.props.titulo}</Text>
            </View>
        );
    }
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
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 50,
    }
})