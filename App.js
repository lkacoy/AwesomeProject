import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FixedHeader from './elements/FixedHeader';

export default class App extends React.Component {
  render() {
    return (
      <View>
          <FixedHeader/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
