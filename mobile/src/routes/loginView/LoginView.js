import axios from 'axios';

import * as React from 'react'
import {Button, Text, View, StyleSheet, TextInput} from "react-native";

const URL = 'http://d36062ec5b85.ngrok.io';

export default class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: null,
            loginInput: '',
            passwordInput: '',
        }
    }

    postToServer(action, params) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        axios.post(`${URL}/api/${action}`, params, config)
            .then((result) => {
                console.log('show result',result.data)
                this.setState({result: result.data.status})
            })
            .catch((err) => {
                console.log(err);
            })
    }
    _handlePressSignUp = () => {
        const params = {
            "uuid" : this.state.loginInput,
            "password" : this.state.passwordInput,
            'type': 'CLIENT'
        };
        this.postToServer('register', params)
    };

    _handlePressSignIn = () => {
        const params = {
            "uuid" : this.state.loginInput,
            "password" : this.state.passwordInput,
        };
        this.postToServer('login', params)
    };

    componentDidUpdate() {
        if (this.state.result === 'SUCCESS') {
            this.props.navigation.navigate('HomeStack', { screen: 'Reminder' })
        }
    }
    render() {
        return (
            <View style={AuthStyle.container}>
                <TextInput
                    style={AuthStyle.input}
                    onChangeText={(text) => this.setState({loginInput: text})}
                    value={this.state.loginInput}
                />
                <TextInput
                    style={AuthStyle.input}
                    onChangeText={(text) => this.setState({passwordInput: text})}
                    value={this.state.passwordInput}
                />
                <Button
                    title="Войти"
                    style={AuthStyle.button}
                    onPress={() => this._handlePressSignIn('login')}
                />
                <Button
                    title="Регистрация"
                    style={AuthStyle.button}
                    onPress={() => this._handlePressSignUp('register')}
                />
                {this.state.result ? <Text>{JSON.stringify(this.state.result)}</Text> : null}
            </View>
        );
    }
}

const AuthStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    button: {
        width: 100,
        height: 50,
        backgroundColor: '#2FD566',
        padding: 20
    },
    input: {
        height: 100,
        padding: 10,
        width: 200,
        margin: 12,
        borderWidth: 1,
    },
});
