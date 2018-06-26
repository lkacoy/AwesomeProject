import React from 'react';
import { StyleSheet, ScrollView, StatusBar } from 'react-native';
import FixedHeader from './elements/FixedHeader';
import TextHeadings from './elements/TextHeadings';
import Icons from './elements/Icons';
import Exam from './elements/Exam';
import QuestionTypeButtonGroupChooser from './elements/QuestionTypeButtonGroupChooser';
import QuestionTypePicker from './elements/QuestionTypePicker';
import TrueFalseQuestionEditor from './elements/TrueFalseQuestionEditor';
import {createStackNavigator} from 'react-navigation';

class Home extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <ScrollView>
                <StatusBar barStyle="light-content"/>
                <FixedHeader/>

                <Button title="Go to Screen A"
                        onPress={() => this.props.navigation
                            .navigate('ScreenA') } />
                <Button title="Go to Screen B"
                        onPress={() => this.props.navigation
                            .navigate('ScreenB') } />

                <TrueFalseQuestionEditor/>

                <QuestionTypeButtonGroupChooser/>
                <QuestionTypePicker/>
                <Exam/>

                <Icons/>
                <View style={{padding: 20}}>
                    <TextHeadings/>
                </View>
            </ScrollView>
        )
    }
}

const ScreenA = () => (
    <View>
        <Text h1>Screen A</Text>
    </View>
);

const ScreenB = () => (
    <View>
        <Text h1>ScreenB</Text>
    </View>
);

const App = createStackNavigator({
    Home: { screen: Home },
    ScreenA: { screen: ScreenA },
    ScreenB: { screen: ScreenB }
});


export default App;
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
