import * as React from 'react'
import {StyleSheet, View, Text} from "react-native";

export default class Basket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){
        return(
            <View style={basketStyle.container}>
                <Text>Basket</Text>
            </View>
        )
    }
}

const basketStyle = StyleSheet.create({
    container: {
        flex: 1,
    }
});
