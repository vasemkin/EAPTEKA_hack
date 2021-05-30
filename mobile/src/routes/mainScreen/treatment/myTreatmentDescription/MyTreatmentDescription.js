import * as React from 'react'
import {StyleSheet, View, Text} from "react-native";
import {RFValue} from 'react-native-responsive-fontsize';

export default class MyTreatmentDescription extends React.Component {
    constructor(props) {
        super(props);
        this.myTreatment = this.props.route.params;
        console.log(this.myTreatment)
        this.state = {}
    }

    render(){
        return(
            <View style={TreatmentDescriptionStyle.container}>
                <View style={TreatmentDescriptionStyle.headerView}>
                    <Text style={TreatmentDescriptionStyle.headerTitle}>
                        {`Назначение№${this.myTreatment.id}       ${this.myTreatment.date}`}
                    </Text>
                </View>

            </View>
        )
    }
}

const TreatmentDescriptionStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerView: {
        width: '100%',
        height: '20%',
        backgroundColor: 'red',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    headerTextView: {
        width: '40%',
        backgroundColor: 'green',
        alignItems: 'center',
        height: '10%'
    },
    headerTitle: {
        fontSize: RFValue(14, 580),
    },
});
