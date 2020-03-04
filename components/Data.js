import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Coin from './Coin'

const iconSelector = {
    BTC: '../icons/btc.png',
    ETH: '../icons/eth.png',
    XRP: '../icons/xrp.png',
    BCH: '../icons/bch.png',
    USDT: '../icons/usdt.png',
    BSV: '../icons/bsv.png',
    LTC: '../icons/ltc.png',
    EOS: '../icons/eos.png',
    BNB: '../icons/bnb.png',
    XTZ: '../icons/xtz.png',
}

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
                    price={Number(coin.quote.USD.price.toFixed(2))}
                    change_24h={Number(coin.quote.USD.percent_change_24h.toFixed(2))}
                    change_7d={Number(coin.quote.USD.percent_change_7d.toFixed(2))}
                    iconAddress={iconSelector['BTC']}
                    />
                ))}
            </ScrollView>
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        alignSelf: 'stretch'
    },
    containerText: {
        fontWeight: '500',
        fontSize: 24
    }
})