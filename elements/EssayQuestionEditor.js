import React, {Component} from 'react';
import {View} from 'react-native';
import {CheckBox, FormLabel, FormInput, FormValidationMessage, Text, Button} from 'react-native-elements';

export default class EssayQuestionEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            points: 0
        }
    }


    formUpdate(newState) {
        this.setState(newState);
    }

    render() {
        return (
            <View>
                <Text h3>Editor - Essay</Text>
                <FormLabel>Title</FormLabel>
                <FormInput onChangeText={
                    text => this.formUpdate({title: text}) }/>
                <FormValidationMessage>
                    Title is required
                </FormValidationMessage>
                <FormLabel>Description</FormLabel>
                <FormInput onChangeText={
                    text => this.formUpdate({description: text}) }/>
                <FormValidationMessage>
                    Description is required
                </FormValidationMessage>
                <FormLabel>Points</FormLabel>
                <FormInput
                    keyboardType="numeric"
                    onChangeText={
                    points => this.formUpdate({points: points})}/>
                <FormValidationMessage>
                    Points are required
                </FormValidationMessage>


                <Button	backgroundColor="green"
                           color="white"
                           title="Save"/>
                <Button	backgroundColor="red"
                           color="white"
                           title="Cancel"/>

                <Text h3>Preview</Text>
                <Text h2>{this.state.title}</Text>
                <Text>{this.state.description}</Text>
            </View>
        )
    }
}
