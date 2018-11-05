import React, { Component } from 'react';
import { View, Text } from 'react-native';
import FloatingLabel from 'react-native-floating-labels';
import styles from './Login.component.style';
import MyButton from '../MyButton/MyButton.component';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onFocus: true,
        }
    }
    render() {
        const { wrapper, header, labelInput, input, formInput } = styles;
        const propsFloatingLabel = {
            labelStyle: labelInput,
            inputStyle: input,
            style: formInput
        }
        return (
            <View style={wrapper}>
                <Text style={header}>Login Information</Text>
                <FloatingLabel
                    {...propsFloatingLabel}
                >Email</FloatingLabel>
                <FloatingLabel
                    {...propsFloatingLabel}
                    secureTextEntry
                >Password</FloatingLabel>
                <MyButton
                    label='Login'
                    onPress={() => this.props.navigation.navigate('Movie')}
                />
            </View>
        );
    }
}

