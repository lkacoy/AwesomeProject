import React, {Component} from 'react';
import {Picker, Text, View} from 'react-native';
import MultipleChoiceQuestionEditor from "./MultipleChoiceQuestionEditor";
import TrueFalseQuestionEditor from "./TrueFalseQuestionEditor";
import EssayQuestionEditor from "./EssayQuestionEditor";
import FillInBlanksQuestionEditor from "./FillInBlanksQuestionEditor";

export default class QuestionTypePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {questionType: 'MC'}
        this.displayQuestionType = this.displayQuestionType.bind(this);
    }

    render() {
        return (
            <View>
                <Picker
                    selectedValue={this.state.questionType}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({questionType: itemValue})}>
                    <Picker.Item value="MC" label="Multiple choice" />
                    <Picker.Item value="ES" label="Essay" />
                    <Picker.Item value="TF" label="True or false" />
                    <Picker.Item value="FB" label="Fill in the blanks" />
                </Picker>
                {this.displayQuestionType()}
            </View>
        )
    }

    displayQuestionType() {
        if (this.state.questionType == 'MC') {
            return (
                <MultipleChoiceQuestionEditor/>
            )
        } else if (this.state.questionType == 'ES') {
            return (
                <EssayQuestionEditor/>
            )
        } else if (this.state.questionType == 'TF') {
            return (
                <TrueFalseQuestionEditor/>
            )
        } else {
            return (
                <FillInBlanksQuestionEditor/>
            )
        }
    }
}
