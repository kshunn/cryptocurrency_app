import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import Header from './components/Header';
import Loading from './components/Loading';
import Data from './components/Data';

const API_KEY = 'e8f9ef99-7a37-493d-8f86-e155dec10acd';

export default class extends React.Component {
  state = {
    isLoading: true
  };

  render(){
    const { isLoading } = this.state;
    return (
      isLoading ? (
        <View style={styles.container}>
          <Header />
          <Loading />
        </View>
      ) : (
        <View style={styles.container}>
          <Header />
          <Data />
        </View>
      )
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',      
  }
})