import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import PropTypes from 'prop-types';

const iconSelector = {
    BTC: require('../icons/btc.png'),
    ETH: require('../icons/eth.png'),
    XRP: require('../icons/xrp.png'),
    BCH: require('../icons/bch.png'),
    USDT: require('../icons/usdt.png'),
    BSV: require('../icons/bsv.png'),
    LTC: require('../icons/ltc.png'),
    EOS: require('../icons/eos.png'),
    BNB: require('../icons/bnb.png'),
    XTZ: require('../icons/xtz.png'),
}

export default function Coin({name, symbol, price, change_24h, change_7d}){ 
    return (
        <View style={styles.content}>
            <View style={styles.name_price}>
                <View style={styles.iconContainer}>
                    <Image source={iconSelector[symbol]} style={styles.icon} />
                </View>
                <View style={styles.half_name}>
                    <Text style={styles.boldText}>{symbol}</Text>
                    <Text style={styles.normalText}> | {name}</Text>
                </View>
                <View style={styles.half_price}>
                    <Text style={styles.boldText}>{price} $</Text>
                </View>
            </View>
            <View style={styles.change}>
                <View style={styles.half_change}>
                    <Text style={styles.normalText}>24h: </Text>
                    <Text style={(change_24h > 0 ) ? styles.blueText : styles.redText}>{change_24h}%</Text>
                </View>
                <View style={styles.half_change}>
                    <Text style={styles.normalText}>7d: </Text>
                    <Text style={(change_7d > 0 ) ? styles.blueText : styles.redText}>{change_7d}%</Text>
                </View>
            </View>
        </View> 
    );
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    change_24h: PropTypes.number.isRequired,
    change_7d: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor: '#bdc3c7',
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    name_price: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ecf0f1'
    },
    change: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
    icon: {
        flex: 1,
        resizeMode: 'contain',
        height: '100%'
    },
    iconContainer: {
        flex: 2,
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        padding: 10,
    },
    half_name: {
        flex: 4,
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 20,
    },
    half_price: {
        flex: 4,
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'flex-end',
        paddingRight: 40,
        alignItems: 'center',
        paddingVertical: 20,
    },
    half_change: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },
    normalText: {
        fontWeight: '300',
        fontSize: 16
    },
    boldText: {
        fontWeight: '800',
        fontSize: 16
    },
    blueText: {
        fontWeight: '500',
        fontSize: 16,
        color: '#17c0eb'
    },
    redText: {
        fontWeight: '500',
        fontSize: 16,
        color: '#eb2f06'
    },
})