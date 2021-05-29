import * as React from 'react'
import {StyleSheet, View, Text} from "react-native";

export default class Favorites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){
        return(
            <View style={favoritesStyle.container}>
                <Text>Favorites</Text>
            </View>
        )
    }
}

const favoritesStyle = StyleSheet.create({
    container: {
        flex: 1,
    }
});
