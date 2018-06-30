import React, {Component} from 'react'
import {View, Alert} from 'react-native'
import {Text, ListItem, Button} from 'react-native-elements'
import FillInBlanksQuestionEditor from "../elements/FillInBlanksQuestionEditor";

class QuestionList extends Component {
    static navigationOptions = {title: 'Questions'}
    constructor(props) {
        super(props)
        this.state = {
            questions: [],
            examId: 1
        }
    }
    componentDidMount() {
        const {navigation} = this.props;
        const examId = navigation.getParam("examId")
        fetch("https://web2018-lexikacoyannakis.herokuapp.com/api/exam/"+examId+"/question")
            .then(response => (response.json()))
            .then(questions => this.setState({questions}))
    }
    render() {
        return(
            <View style={{padding: 15}}>
                {this.renderQuestions()}
                <Button title="Add New Question"
                        onPress={() => this.props.
                        navigation.navigate("QuestionTypePicker", {examId: this.state.examId})}/>
            </View>
        )
    }

    renderQuestions() {
        if (this.state.questions && this.state.questions.length > 0) {
            return (
                this.state.questions.map(
                    (question, index) => (
                        <ListItem
                            onPress={() => {
                                if(question.type === "TrueFalseExamQuestion")
                                    this.props.navigation
                                        .navigate("TrueFalseQuestionEditor", {questionId: question.id})
                                if(question.type === "MultipleChoiceQuestion")
                                    this.props.navigation
                                        .navigate("MultipleChoiceQuestionEditor", {questionId: question.id})
                                if (question.type === "FillInTheBlanksExamQuestion")
                                    this.props.navigation
                                        .navigate("FillInBlanksQuestionEditor", {questionId: question.id})
                                if (question.type === "EssayExamQuestion")
                                    this.props.navigation
                                        .navigate("EssayQuestionEditor", {questionId: question.id})
                            }}
                            key={index}
                            subtitle={question.description}
                            title={question.title}/>))
            )
        }
    }

}
export default QuestionList