import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Data from './QuizData';
import Quiz from './QuizList';
import Button from '../Button/Button';



class QuizScreen extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            index: 0,

        }
    }

    render() {
        const { index } = this.state;
        console.log(this.state.value);
        console.log(Data);

        return (
            <View  style={{flex:1}} >
                <View style={{flex:1}}>
                    <Quiz data={Data[index]} />
                </View>
                <View style={{flex:1}}>
                    <Button
                        name={'Next'}
                        onPress={() => console.log('Working')}
                    />

                </View>
            </View>
        )
    }
}
export default QuizScreen;