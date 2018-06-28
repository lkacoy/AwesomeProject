import React, {Component} from 'react'
import {View} from 'react-native'
import {Text, Button} from 'react-native-elements'
import ModuleList from "./ModuleList";

const Preview = () => (
    <View>
        <Text h1>Preview</Text>
        <Button title="Cancel"/>
        <Button title="Submit"/>
    </View>
);

class AssignmentWidget extends Component {

    static navigationOptions = {title: 'Assignments'}
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            title: '',
            description: '',
            points: 0,
            lessonId: 1
        }

    }

    componentDidMount() {
        const {navigation} = this.props;
        const lessonId = navigation.getParam("lessonId")

    }

    render() {
        console.log(this.state.preview);
        return (
            <View style={{padding: 15}}>
                <Text h4>Title</Text>
                <Text h4>Description</Text>
                <Text h4>Points</Text>

                <Text h1>Preview</Text>
                <Text>Assignment: {this.state.id} - {this.state.title}</Text>
                <Text>{this.state.points} pts</Text>
                <Text>{this.state.description}</Text>
                <Button title="Cancel"/>
                <Button title="Submit"/>
            </View>
        )
    }


}
export default AssignmentWidget