import * as React from 'react'
import {StyleSheet, View, ScrollView, Text, TouchableOpacity, Image, TouchableWithoutFeedback} from "react-native";
import {RFValue} from 'react-native-responsive-fontsize';

const HEALING_COURSES = [
    {
        id: 1,
        date: 'от 28.07.2021 г',
        hospitalNum: 'Поликлиника: ГБУЗ № 68 ДЗМ филиал №1 (ГП №51)',
        doctor: 'Ермоленко Виктория Константиновна'
    },
    {
        id: 2,
        date: 'от 28.07.2021 г',
        hospitalNum: 'Поликлиника: ГБУЗ № 68 ДЗМ филиал №1 (ГП №51)',
        doctor: 'Ермоленко Виктория Константиновна'
    },
]

export default class MyTreatments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleClick(healingCourse) {
        this.props.navigation.navigate('MyTreatmentDescription', healingCourse)
    }

    render(){
        console.log(HEALING_COURSES.length)
        return(
            <View style={myTreatmentStyle.container}>
                    <ScrollView
                        vertical
                        showsVerticalScrollIndicator={false}
                        scrollEventThrottle={10}
                    >
                        <View style={myTreatmentStyle.flatList}>
                            {HEALING_COURSES.map((item, i) => (
                                <TouchableWithoutFeedback
                                    key={[`button${i}`]}
                                    onPress={() => this.handleClick(item)}
                                >
                                    <View style={myTreatmentStyle.healingCourse}>
                                        <View style={myTreatmentStyle.firstRow}>
                                            <Text style={{fontWeight: 'bold', fontSize: 16}}>
                                                {`Назначение №${item.id}`}
                                            </Text>
                                            <Text>
                                                {`${item.date}`}
                                            </Text>
                                        </View>
                                        <View style={myTreatmentStyle.secondRow}>
                                            <Text style={{}}>
                                                {`${item.hospitalNum}`}
                                            </Text>
                                        </View>
                                        <View style={myTreatmentStyle.thirdRow}>
                                            <Text style={{}}>
                                                {`${item.doctor}`}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            ))}
                        </View>
                    </ScrollView>
            </View>
        )
    }
}

const myTreatmentStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    flatList: {
        marginTop: '5%',
        height: 800,
    },
    healingCourse: {
        width: 360,
        height: 150,
        marginBottom: '5%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E6E1FF'
    },
    firstRow:{
        padding: 10,
        justifyContent: 'space-between',
        height: '33%',
        flexWrap: 'wrap',
        flexDirection: 'row'

    },
    secondRow:{
        paddingLeft: 10,
        paddingRight: 10,
        height: '33%',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    thirdRow:{
        paddingLeft: 10,
        paddingRight: 10,
        height: '33%',
        justifyContent: 'center'
    },
    tabText: {
        textDecorationLine: 'underline',
        color: '#7D69E8'
    },
    headerText: {
        paddingLeft: 30,
        fontWeight: 'bold',
        fontSize: RFValue(20, 580),
    },
});
