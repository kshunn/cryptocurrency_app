import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Cryptocurrency App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    headerText: {
        fontSize: 24,
        fontFamily: 'montserrat-bold'
    }
})