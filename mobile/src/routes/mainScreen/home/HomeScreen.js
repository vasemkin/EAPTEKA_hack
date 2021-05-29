import * as React from 'react'
import {StyleSheet, View, Text} from "react-native";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";

export default class Reminders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){
        return(
            <View style={homeScreenStyle.container}>
                <Text>HomeScreen</Text>
            </View>
        )
    }
}

const homeScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
    }
});
