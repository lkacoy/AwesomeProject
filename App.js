import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import FixedHeader from './elements/FixedHeader';
import TextHeadings from './elements/TextHeadings';
import Icons from './elements/Icons';

export default class App extends React.Component {
  render() {
    return (
      <View>
          <StatusBar barStyle="light-content"/>
          <FixedHeader/>
          <Icons/>
          <View style={{padding: 20}}>
          <TextHeadings/>
          </View>
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
