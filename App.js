import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import axios from 'axios';
import Header from './components/Header';
import Loading from './components/Loading';
import Data from './components/Data';
import * as Font from 'expo-font';

const API_KEY = 'e8f9ef99-7a37-493d-8f86-e155dec10acd';

export default class extends React.Component {
  state = {
    isLoading: true,
    isFontLoading: true
  };
  getFont = async() => {
    await Font.loadAsync({
      'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
      'montserrat-medium': require('./assets/fonts/Montserrat-Medium.ttf'),
      'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    });
    this.setState({isFontLoading: false});
  }
  getData = async() => {
    const {
      data: {
        data
      }
    } = await axios.get(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=10&convert=USD&CMC_PRO_API_KEY=${API_KEY}`
    );
    this.setState({isLoading: false, data});
  }; //requires name, abbreviated name, current value, change during 24h / 7d
  render(){
    const { isLoading, isFontLoading, data } = this.state;
    return (
      (isLoading || isFontLoading) ? (
        <View style={styles.container}>
          <Header />
          <Loading />
        </View>
      ) : (
        <View style={styles.container}>
          <Header/>
          <Data data={data}/>
        </View>
      )
    );
  }
  componentDidMount(){
    this.getData();
    this.getFont();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',      
  }
})