import React from 'react';
import {View} from 'react-native';
import {FormLabel, FormInput, FormValidationMessage, Text} from 'react-native-elements';

class TrueFalseQuestionEditor extends React.Component {

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
                <Text h3>Editor</Text>
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

                <Text h3>Preview</Text>
                <Text h2>{this.state.title}</Text>
                <Text>{this.state.description}</Text>
            </View>
        )
    }
}
export default TrueFalseQuestionEditor