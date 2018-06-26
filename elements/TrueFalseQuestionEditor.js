import React from 'react';
import {View} from 'react-native';
import {FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';

class TrueFalseQuestionEditor extends React.Component {
    render() {
        return (
            <View>
                <FormLabel>Title</FormLabel>
                <FormInput onChangeText={
                    text => this.formUpdate({title: text}) }/>
                <FormValidationMessage>
                    Title is required
                </FormValidationMessage>
            </View>
        )
    }
}
export default TrueFalseQuestionEditor