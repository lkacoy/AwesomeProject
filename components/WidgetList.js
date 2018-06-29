import React, {Component} from 'react'
import {View, Alert} from 'react-native'
import {Text, ListItem, Button} from 'react-native-elements'

class WidgetList extends Component {
    static navigationOptions = {title: 'Widgets'}
    constructor(props) {
        super(props)
        this.state = {
            assignments: [],
            exams: [],
            courseId: 1,
            moduleId: 1,
            lessonId: 1,
        }
    }
    componentDidMount() {
        const {navigation} = this.props;
        const lessonId = navigation.getParam("lessonId")
        this.setState({
            lessonId: lessonId
        })

        fetch("https://web2018-lexikacoyannakis.herokuapp.com/api/lesson/"+lessonId+"/assignment")
            .then(response => (response.json()))
            .then(assignments => this.setState({assignments}))

        fetch("https://web2018-lexikacoyannakis.herokuapp.com/api/lesson/"+lessonId+"/exams")
            .then(response => (response.json()))
            .then(exams => this.setState({exams}))
    }
    render() {
        console.log(this.state.lessonId);
        if (this.state.widgets && this.state.widgets.length > 0) {
            return (
                <View style={{padding: 15}}>
                    <Text h3>Assignments</Text>
                    {this.state.assignments.map(
                        (assignment, index) => (
                            <ListItem
                                onPress={() => this.props.navigation
                                    .navigate("QuestionList", {assignmentId: assignment.id})}
                                key={index}
                                subtitle={assignment.description}
                                title={assignment.title}/>))}
                    <Button title="Add New Assignment"
                                   onPress={() => this.props.navigation
                                       .navigate("AssignmentWidget", {lessonId: this.state.lessonId})} />
                    <Text h3>Exams</Text>
                    {this.state.exams.map(
                        (exam, index) => (
                            <ListItem
                                onPress={() => this.props.navigation
                                    .navigate("QuestionList", {examId: exam.id})}
                                key={index}
                                subtitle={exam.description}
                                title={exam.title}/>))}
                    <Button title="Add New Exam"
                            onPress={() => this.props.navigation
                                .navigate("Exam", {lessonId: this.state.lessonId})} />
                </View>
            )
        } else {
            return (
                <View>
                    <Button title="Add New Assignment"
                            onPress={() => this.props.navigation
                                .navigate("AssignmentWidget", {lessonId: this.state.lessonId})} />
                    <Button title="Add New Exam"
                            style={{padding: 15}}
                            onPress={() => this.props.navigation
                                .navigate("Exam", {lessonId: this.state.lessonId})} />
                </View>
            )
        }
    }



}
export default WidgetList