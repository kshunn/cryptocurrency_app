import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function coin({name, symbol, price, change_24h, change_7d}){
    return (
        <View style={styles.content}>
            <Text style={styles.contentText}>{name}</Text>
            <Text style={styles.contentText}>{symbol}</Text>
            <Text style={styles.contentText}>{price}</Text>
            <Text style={styles.contentText}>{change_24h}</Text>
            <Text style={styles.contentText}>{change_7d}</Text>
        </View> 
    );
}

const styles = StyleSheet.create({
    content: {
        borderWidth: 2,
        alignSelf: 'stretch',
        alignItems: 'center'
    },
    contentText: {
        fontWeight: '500',
        fontSize: 24
    }
})

// {data.map(coin => (
//     <Data
//       key={coin.id}
//       name={coin.name}
//       symbol={coin.symbol}
//       price={coin.quote.USD.price}
//       change_24h={coin.quote.USD.percent_change_24h}
//       change_7d={coin.quote.USD.percent_change_7d}
//     />
//   ))}