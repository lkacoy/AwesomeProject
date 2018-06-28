import React, {Component} from 'react'
import {View} from 'react-native'
import {Text, ListItem} from 'react-native-elements'
import ModuleList from "./ModuleList";

class AssignmentWidget extends Component {

    constructor(props) {
        super(props)
        this.state = {
            widgets: [],
            lessonId: 1,
        }
    }

    componentDidMount() {
        const {navigation} = this.props;
        const lessonId = navigation.getParam("lessonId")

    }

    render() {
        return (
            <View stye={{padding: 15}}>
                <Text h2>Lists</Text>
            </View>
        )
    }
}
export default AssignmentWidget