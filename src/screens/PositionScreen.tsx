import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaVerde} />
        <View style={styles.cajaMorada} />
        <View style={styles.cajaNaranja} />


    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#28C4D9',
    },
    cajaMorada: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        position: 'absolute',
        top: 0,
        right: 0,

    },
    cajaNaranja: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    cajaVerde: {
        // width: 100,
        // height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: 'green',
        // position: 'absolute',
        // bottom: 0,
        // left: 0,
        ...StyleSheet.absoluteFillObject,
    },
})