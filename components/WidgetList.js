import React, {Component} from 'react'
import {View, Alert} from 'react-native'
import {Text, ListItem, Button} from 'react-native-elements'

class WidgetList extends Component {
    static navigationOptions = {title: 'Widgets'}
    constructor(props) {
        super(props)
        this.state = {
            widgets: [],
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

        fetch("https://web2018-lexikacoyannakis.herokuapp.com/api/lesson/"+lessonId+"/widget")
            .then(response => (response.json()))
            .then(widgets => this.setState({widgets}))
    }
    render() {
        console.log(this.state.lessonId);
        if (this.state.widgets && this.state.widgets.length > 0) {
            return (
                <View style={{padding: 15}}>
                    {this.state.widgets.map(
                        (widget, index) => (
                            <ListItem
                                onPress={() => this.props.navigation
                                    .navigate("QuestionList", {examId: widget.id})}
                                key={index}
                                subtitle={widget.description}
                                title={widget.title}/>))}
                    <Button title="Add New Assignment"
                                   onPress={() => this.props.navigation
                                       .navigate("AssignmentWidget", {lessonId: this.state.lessonId})} />
                </View>
            )
        } else {
            return (
                <View>
                    <Button title="Add New Assignment"
                            onPress={() => this.props.navigation
                                .navigate("AssignmentWidget", {lessonId: this.state.lessonId})} />
                </View>
            )
        }
    }



}
export default WidgetList