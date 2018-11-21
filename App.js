import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        <Button
          raised
          icon={{ name: 'expand-less', size: 32 }}
          buttonStyle={{ backgroundColor: '#00bfff', borderRadius: 10 }}
          textStyle={{ textAlign: 'center' }}
          title={`Get Started`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
