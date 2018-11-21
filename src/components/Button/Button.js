import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';


const CameraButton = (props) => {
    return (
        <View>
            <Button
                onPress={props.onPress}
                raised
                icon={{ name: 'expand-less', size: 32 }}
                buttonStyle={{ backgroundColor: '#00bfff', borderRadius: 10 }}
                textStyle={{ textAlign: 'center' }}
                title={`Get Started`}
            />
        </View>
    )
}
export default CameraButton;