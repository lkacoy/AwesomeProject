import React from 'react'
import {View} from 'react-native'
import {Text, Button, CheckBox} from 'react-native-elements'
import {FormLabel, FormInput, FormValidationMessage}
    from 'react-native-elements'

class MultipleChoiceQuestionEditor extends React.Component {
    static navigationOptions = { title: "Multiple Choice"}
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            points: 0,
            optionText: '',
            options: [],
            correctOption: ''
        }
        this.addChoice = this.addChoice.bind(this);
        this.renderOptions = this.renderOptions.bind(this);
    }
    updateForm(newState) {
        this.setState(newState)
    }
    render() {
        return(
            <View>
                <FormLabel>Title</FormLabel>
                <FormInput onChangeText={
                    text => this.updateForm({title: text})
                }/>
                <FormValidationMessage>
                    Title is required
                </FormValidationMessage>

                <FormLabel>Description</FormLabel>
                <FormInput onChangeText={
                    text => this.updateForm({description: text})
                }/>
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

                <FormLabel>Choices</FormLabel>
                <FormInput onChangeText={
                    text => this.updateForm({optionText: text})
                }/>
                <Button title="Add Choice" onPress={() => this.addChoice()}/>

                <Button	backgroundColor="green"
                           color="white"
                           title="Save"/>
                <Button	backgroundColor="red"
                           color="white"
                           title="Cancel"/>

                <Text h3>Preview</Text>
                <Text h2>{this.state.title}</Text>
                <Text>{this.state.description}</Text>
                {this.renderOptions()}
            </View>
        )
    }

    addChoice(text) {
        this.state.options.push(this.state.optionText);
        this.updateForm({optionText: ''});
    }

    renderOptions() {
        if (this.state.options && this.state.options.length > 0) {
            console.log("options " + this.state.options.length);
            this.state.options.forEach(option => {
                return (
                    <Text>{option}</Text>
                )
            })
        }
    }
}

export default MultipleChoiceQuestionEditor