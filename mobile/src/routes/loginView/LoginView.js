import axios from 'axios';

import * as React from 'react'
import {Button, Text, View, StyleSheet} from "react-native";

const FB_APP_ID = 'YOUR_APP_ID';

export default class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: null
        }
    }

    _handlePressAsync = () => {
        const params = {
            "uuid" : "2ddwss2",
            "password" : "www"
        };

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        axios.post('http://82bbf7c3e32d.ngrok.io/api/login', params, config)
            .then((result) => {
                console.log('show status',result.data.status)
                console.log('show type',result.data.type)
            })
            .catch((err) => {
                console.log(err);
            })
    };

    render() {
        return (
            <View style={AuthStyle.container}>
                <Text>Логин</Text>
                <Button
                    title="Open Auth"
                    style={AuthStyle.button}
                    onPress={() => this._handlePressAsync()}
                />
                {this.state.result ? <Text>{JSON.stringify(this.state.result)}</Text> : null}
            </View>
        );
    }
}

export const AuthStyle = StyleSheet.create({
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
    }
});
