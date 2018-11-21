import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';
import { Button } from 'react-native-elements';

export default class CameraExample extends React.Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
    };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }
    snap = async () => {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync();
            console.log(photo);
        }
    }

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Camera
                        ref={ref => this.camera = ref}
                        style={{ flex: 1 }} type={this.state.type}>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                // flexDirection: 'row',
                            }}>
                            <Button
                                onPress={this.snap}
                                raised
                                icon={{ name: 'expand-less', size: 32 }}
                                buttonStyle={{ backgroundColor: '#00bfff', borderRadius: 10 }}
                                textStyle={{ textAlign: 'center' }}
                                title={`Capture`}
                            />
                        </View>
                    </Camera>
                </View>
            );
        }
    }
}