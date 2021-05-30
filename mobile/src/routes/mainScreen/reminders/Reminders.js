import React, { useState, useEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios'
import {StyleSheet, View, CheckBox, Text, Image, TouchableOpacity, Modal, TextInput } from "react-native";
import {LocaleConfig, WeekCalendar} from "react-native-calendars";
import PencilIcon from '../../../assets/systemAssets/pencil.png';
import CloseIcon from '../../../assets/systemAssets/close.png';
import moment from "moment";

const URL = 'http://d36062ec5b85.ngrok.io'

LocaleConfig.locales['ru'] = {
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthNamesShort: ['Янв.','Февр.','Март','Апрель','Май','Июнь','Июль.','Август','Сент.','Окт.','Нояб.','Дек.'],
    dayNames: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
    dayNamesShort: ['ВС','ПН','ВТ','СР','ЧТ','ПТ','СБ'],
    today: 'Сегодня'
};
LocaleConfig.defaultLocale = 'ru';

const Reminders = (props) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [prescription, setPrescription] = useState({
        prescription : {}
    });
    
    const [pills, setPills] = useState({
        // pill : {
        //     data : [],
        //     name : '',
        //     dates : []
        // }
    })

    const [calendar, setCalendar] = useState({
        selectedDay : null,
        markedDates : {}
    })

    const handleDayPress = (day) => {
        setCalendar({
            ...calendar,
            selectedDay : day,
            markedDates : {
                ...calendar.markedDates,
                // ...Object.values(calendar.markedDates).filter((item) => { return !item.userSelected }),
                [day.dateString] : {selected: true, marked: false, userSelected: true, selectedColor: '#7D69E8'}
            }
        });
    }

    console.log(calendar)

    useEffect(() => {
        const url = `${URL}/api/get_prescription`

        axios({
            url : url,
            method : 'POST',
            data : {
                prescription_id : "SdDX"
            },
            headers : {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            const pres = res.data.data

            setPrescription({
                prescription: pres
            })
            
            res.data.data.data.forEach((pill) => {

                let days = 4

                switch (pill.frequency) {
                    case 'ONE_DAY':
                        days = 1
                        break;

                    case 'TWO_DAY':
                        days = 1
                        break;

                    case 'ONE_WEEK':
                        days = 7
                        break;

                    case 'TWO_WEEK':
                        days = 4
                        break;
                
                    default:
                        break;
                }

                const issueDate = pill.data.issueDate;
                const prettyDate = moment(issueDate.replace(/\./g, '-'), 'DD-MM-YYYY');
                let dates = [prettyDate];
                let formattedDates = {
                    [moment(prettyDate).format('YYYY-MM-DD')] : {selected: true, marked: true, selectedColor: '#333333'}
                };

                [1,2,3,4,5,6].map((e, i) => {
                    const tooTiredToThink = moment(dates[i], 'DD-MM-YYYY').add(days, 'days');
                    dates = [...dates, tooTiredToThink];
                    formattedDates = {
                        ...formattedDates,
                        [moment(tooTiredToThink).format('YYYY-MM-DD')] : {selected: true, marked: true, selectedColor: '#333333'}
                    };
                })

                setPills({
                    ...pills, 
                    [pill.key] : { 
                        pill : pill, 
                        dates : dates,
                        formattedDates : formattedDates
                    }
                })

                setCalendar({
                    ...calendar, 
                    markedDates : formattedDates
                })
            })
            
        })

    }, [])

    return(
        <View style={styles.container}>
            <View style={styles.field}>
                <View style={[styles.field__item, styles.field__item_last]}>
                    <Text>Название</Text>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} >
                        <Image style={styles.field__image} source={PencilIcon}/>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.calendar}>
                <Text style={styles.calendar__label}>Начало: 01.06.2021</Text>
                <WeekCalendar
                    markedDates={calendar.markedDates}
                    renderHeader={(date) => {<Text>{date}</Text>}}
                    onDayPress={(day) => {handleDayPress(day)}}
                />
            </View>

            <View style={styles.card}>
                <Text style={styles.card__subtitle}>Осталось: 14 дней</Text>
                <View style={styles.checkbox__wrapper}>
                    <CheckBox
                        // value={isSelected}
                        // onValueChange={setSelection}
                        style={styles.checkbox}
                    />
                    <Text style={styles.checkbox__label}>10:00 Азитромицин (3 шт) </Text>
                </View>
                <View style={styles.checkbox__wrapper}>
                    <CheckBox
                        // value={isSelected}
                        // onValueChange={setSelection}
                        style={styles.checkbox}
                    />
                    <Text style={styles.checkbox__label}>19:00 Азитромицин (3 шт) </Text>
                </View>
            </View>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.modal__header}>
                            <View>
                                <TouchableOpacity
                                    style={styles.modal__close}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Image style={styles.modal__closeicon} source={CloseIcon}></Image>
                                </TouchableOpacity>
                            </View>
                            
                            <View>
                                <Text style={styles.modal__title}>Название курса лечения</Text>
                            </View>
                        </View>
                        
                        <View style={styles.modal__content}>

                            <Text style={styles.modal__sublabel}>Название</Text>
                            <TextInput 
                                placeholder="Название"
                                style={styles.input}
                            />
                            <Text style={styles.modal__sublabel}>До 50 символов</Text>

                        </View>

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.button__text}>Сохранить</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>

        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7'
    },

    input: {
        padding: 7,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#979797',
    },

    calendar: {
        marginTop: 20
    },

    calendar__label: {
        paddingBottom: 10,
        paddingLeft: 16,
        color: 'rgba(151, 151, 151, 1)'
    },

    field: {
        paddingRight: 16,
        paddingLeft: 16,
        backgroundColor: '#FFFFFF'
    },

    field__item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#EAEAEA'
    },

    field__image: {
        width: 24,
        height: 24
    },

    field__item_last: {
        borderBottomWidth: 0
    },

    checkbox__wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16
    },

    checkbox__label: {
        marginLeft: 11
    },

    card: {
        marginTop: 24,
        padding: 16,
        backgroundColor: '#FFFFFF'
    },

    card__subtitle: {
        marginBottom: 16,
        fontSize: 15,
        color: 'rgba(151, 151, 151, 1)'
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.25)'
    },

    modalView: {
        width: '80%',
        alignSelf: 'center',
        backgroundColor: "white",
        borderRadius: 8,
        padding: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.01,
        shadowRadius: 1,
        elevation: 2
    },

    buttonClose: {
        backgroundColor: "#2196F3",
    },

    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },

    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },

    modal__header: {
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 32,
    },

    modal__closeicon: {
        marginRight: '8%',
        width: 24,
        height: 24
    },

    modal__title: {
        fontWeight: "bold",
        fontSize: 17
    },

    modal__sublabel: {
        fontSize: 12,
        marginLeft: 10,
        color: 'rgba(151, 151, 151, 1)'
    },

    modal__content: {
        marginBottom: 32
    },

    button: {
        alignSelf: 'center',
        width: '100%',
        backgroundColor: '#7D69E8',
        borderRadius: 100,
        padding: 10,
    },

    button__text: {
        color: '#FFFFFF',
        alignSelf: 'center'
    }

});

export default Reminders