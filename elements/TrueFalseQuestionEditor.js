import React from 'react';
import {View} from 'react-native';
import {FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';

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
            </View>
        )
    }
}
export default TrueFalseQuestionEditor