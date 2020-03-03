import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Data({data}){
    return (
        <View style={styles.container}>
            <Text style={styles.containerText}>Data</Text>
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center'  
    },
    containerText: {
        fontWeight: '500',
        fontSize: 24
    }
})