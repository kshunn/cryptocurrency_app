import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading(){
    return (
        <View style={styles.container}>
            <Text style={styles.containerText}>Loading..</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center'  
    },
    containerText: {
        fontSize: 24,
        fontFamily: 'montserrat-bold'
    }
})