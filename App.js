import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card } from 'react-native-elements';
import Header from './src/components/Header/Header';
import Camera from './src/components/Camera/Camera';
import Button1 from './src/components/Button/Button.js';
import Quiz from './src/components/Quiz/Quiz';

export default class App extends React.Component {

  state = {
    camera: false,
    quiz: true
  }


  render() {
    const { camera, quiz } = this.state;
    return (
      <View style={styles.container} >
        <View style={styles.header}>
          <Header name="Quiz App" />
        </View>
        <View style={styles.button} >
          {quiz ? <Quiz /> :
            camera ? <Camera /> :
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
});
