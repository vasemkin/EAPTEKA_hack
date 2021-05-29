import * as React from 'react'
import {StyleSheet, View, FlatList, Text, TouchableOpacity, Image} from "react-native";
import {RFValue} from 'react-native-responsive-fontsize';
import MyTreatmentsIcon from '../../../assets/systemAssets/my_treatments_icon.png'
import AddTreatmentsIcon from '../../../assets/systemAssets/add_treatments_icon.png'
import TreatmentCalendarIcon from '../../../assets/systemAssets/treatment_calendar_icon.png'

const BUTTONS = [
    {title: 'Мои назначения', img: MyTreatmentsIcon, route: 'MyTreatments'},
    {title: 'Добавить курс лечения', img: AddTreatmentsIcon, route: ''},
    {title: 'Календарь приема', img: TreatmentCalendarIcon, route: ''},
]
export default class Treatment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleClick(route) {
        this.props.navigation.navigate(route)
    }

    render(){
        return(
            <View style={treatmentStyle.container}>
                <View style={treatmentStyle.header}>
                    <Text style={treatmentStyle.headerText}>Назначения</Text>
                </View>
                {BUTTONS.map((item) => (
                    <TouchableOpacity
                        style={treatmentStyle.buttonStyle}
                        onPress={() => this.handleClick(item.route)}
                    >
                        <Image style={[treatmentStyle.icon]} source={item.img}/>
                        <Text style={[treatmentStyle.buttonText, {paddingLeft: 20}]}>{item.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        )
    }
}

const treatmentStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    header: {
        // backgroundColor: 'blue',
        width: '100%',
        height: '16%',
        justifyContent: 'flex-end',
        marginBottom: 40,
    },
    headerText: {
        paddingLeft: 30,
        fontWeight: 'bold',
        fontSize: RFValue(20, 580),
    },
    buttonStyle: {
        width: '90%',
        height: '12%',
        borderWidth: 1,
        margin: 5,
        padding: 32,
        borderRadius: 10,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    icon: {
        resizeMode: 'contain',
        height: 30,
        width: 30,
    },
    buttonText: {
        fontSize: RFValue(12, 580),
    },
});
