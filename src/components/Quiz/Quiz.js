import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';


class Quiz extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    render() {
        const { checked } = this.state;
        return (
            <View  >
                <CheckBox
                    component={TouchableWithoutFeedback}
                    onPress={() => this.setState({ checked: !checked })}
                    title='This Is A Message'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={checked}
                />
                <CheckBox
                    component={TouchableWithoutFeedback}
                    onPress={() => this.setState({ checked: !checked })}
                    title='This Is A Message'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={checked}
                />
                <CheckBox
                    component={TouchableWithoutFeedback}
                    onPress={() => this.setState({ checked: !checked })}
                    title='This Is A Message'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={checked}
                />
            </View>
        )
    }
}
export default Quiz;