import React, {Component} from 'react';
import {View} from 'react-native';
import {ListItem, Text} from 'react-native-elements';

export default class Exam extends Component {
    render() {
        return (
            <View stye={{padding: 15}}>
                <Text h2>Lists</Text>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
            </View>
        )
    }
}