import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Coin from './Coin'

export default function Data({data}){
    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'flex-start'
                }}
            >
                {data.map(coin => (
                    <Coin
                    key={coin.id}
                    name={coin.name}
                    symbol={coin.symbol}
                    price={coin.quote.USD.price}
                    change_24h={coin.quote.USD.percent_change_24h}
                    change_7d={coin.quote.USD.percent_change_7d}
                    />
                ))}
            </ScrollView>
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        borderWidth: 2,
        alignSelf: 'stretch'
    },
    containerText: {
        fontWeight: '500',
        fontSize: 24
    }
})