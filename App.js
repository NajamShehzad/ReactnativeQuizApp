import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card } from 'react-native-elements';
import Header from './src/components/Header/Header';
import Camera from './src/components/Camera/Camera';
import Button1 from './src/components/Button/Button.js';
import Quiz from './src/components/Quiz/Quiz';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      camera: false,
      quiz: true,
      marks: 0,
      result: false,
      finalResult: null
    }
    this.result = this.result.bind(this);
  }



  startQuiz() {
    this.setState({ quiz: true })
  }
  result(finalResult) {
    console.log(finalResult);
    this.setState({ result: true, finalResult })
  }

  render() {
    const { camera, quiz, result } = this.state;
    return (
      <View style={styles.container} >
        <View style={styles.header}>
          <Header name="Quiz App" />
        </View>
        <View style={quiz ? styles.quiz : styles.button} >
          {result ? <View>
            <Text>
              Result Screen : {this.state.finalResult.marks}
            </Text>
            <Text>
              Out of : {this.state.finalResult.length * 10}
            </Text>
          </View> : quiz ? <Quiz result={this.result} /> :
              camera ? <Camera startQuiz={() => this.startQuiz()} /> :
                <Button1
                  onPress={() => { this.setState({ camera: true }) }}
                />
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    height: 60
  },
  button: {
    flex: 10,
    height: 80,
    justifyContent: 'center',
    // alignItems:'center'
  }
  ,
  quiz: {
    flex: 10,
    height: 500,
    justifyContent: 'center',
  }
});
