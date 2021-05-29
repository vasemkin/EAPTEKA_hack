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
                    <View>
                        <Text style={TreatmentDescriptionStyle.headerTitle}>
                            {`Назначение№${this.myTreatment.id}`}
                        </Text>
                    </View>
                    <View style={TreatmentDescriptionStyle.headerTextView}>
                        <Text style={TreatmentDescriptionStyle.headerDate}>
                            {`${this.myTreatment.date}`}
                        </Text>
                    </View>
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
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    headerTextView: {
        width: '33%',
        backgroundColor: 'green',
        alignItems: 'center',
        height: '100%'
    },
    headerTitle: {
        fontSize: RFValue(20, 580),
    },
    headerDate: {
        fontSize: RFValue(14, 580),
    },
});
