import React, {Component} from 'react'
import {View} from 'react-native'
import {Text, Button, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'

const Preview = () => (
    <View>
        <Text h1>Preview</Text>
        <Button title="Cancel"/>
        <Button title="Submit"/>
    </View>
);


const ASSIGNMENT_API_URL = 'https://web2018-lexikacoyannakis.herokuapp.com/api/assignment';
const ASSIGNMENT_LESSON_API_URL="https://web2018-lexikacoyannakis.herokuapp.com/api/lesson/{LID}/assignment";


class AssignmentWidget extends Component {

    static navigationOptions = {title: 'Assignments'}
    constructor(props) {
        super(props)
        this.state = {
            assignment: {id: '', title: '', description: '', points: 0, widgetType: "Assignment"},
            lessonId: 1,
            widgetId: ''
        }
        this.createNewAssignment = this.createNewAssignment.bind(this);
        this.createAssignment = this.createAssignment.bind(this);
        this.deleteAssignment = this.deleteAssignment.bind(this);
    }

    componentDidMount() {
        const {navigation} = this.props;
        const lessonId = navigation.getParam("lessonId");
        this.state.lessonId = lessonId;
    }

    updateForm(newState) {
        this.setState(newState)
    }

    render() {
        return (
            <View style={{padding: 15}}>
                <FormLabel>Title</FormLabel>
                <FormInput onChangeText={
                    text => this.updateForm({assignment: {title: text}})
                }/>
                <FormValidationMessage>
                    Title is required
                </FormValidationMessage>
                <FormLabel>Description</FormLabel>
                <FormInput onChangeText={
                    text => this.updateForm({assignment: {description: text}})
                }/>
                <FormValidationMessage>
                    Description is required
                </FormValidationMessage>
                <FormLabel>Points</FormLabel>
                <FormInput keyboardType="numeric"
                           onChangeText={
                    text => this.updateForm({assignment: {points: text}})
                }/>
                <FormValidationMessage>
                    Points is required
                </FormValidationMessage>

                <Text h1>Preview</Text>
                <Text>Assignment: {this.state.assignment.id} - {this.state.assignment.title}</Text>
                <Text>{this.state.assignment.points} pts</Text>
                <Text>{this.state.assignment.description}</Text>
                <Text>Submit a Link</Text>
                <FormInput/>
                <Button title="Cancel"/>
                <Button title="Submit" onPress={() => this.createNewAssignment()}/>
                <Button title="Delete" onPress={() => this.deleteAssignment()}/>
            </View>
        )
    }

    createNewAssignment() {
        this.createAssignment(this.state.lessonId, this.state.assignment)
            .then(this.props.navigation
                .navigate("WidgetList", {lessonId: this.state.lessonId}))
    }

    createAssignment(lessonId, assignment) {
        return fetch(ASSIGNMENT_LESSON_API_URL.replace('LID', lessonId),
            {
                body: JSON.stringify(assignment),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }


    deleteAssignment() {
        return fetch(ASSIGNMENT_API_URL + '/' + this.state.assignment.id,
            {
                method: 'DELETE'
            })
    }

}
export default AssignmentWidget