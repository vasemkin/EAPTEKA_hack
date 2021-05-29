import * as React from 'react'
import {StyleSheet, View, Text} from "react-native";

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){
        return(
            <View style={profileStyle.container}>
                <Text>Profile</Text>
            </View>
        )
    }
}

const profileStyle = StyleSheet.create({
    container: {
        flex: 1,
    }
});
