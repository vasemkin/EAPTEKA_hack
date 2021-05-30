import React, { useState } from 'react'
import {StyleSheet, View, CheckBox, Text} from "react-native";
import {LocaleConfig, WeekCalendar} from "react-native-calendars";

LocaleConfig.locales['ru'] = {
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthNamesShort: ['Янв.','Февр.','Март','Апрель','Май','Июнь','Июль.','Август','Сент.','Окт.','Нояб.','Дек.'],
    dayNames: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
    dayNamesShort: ['ВС','ПН','ВТ','СР','ЧТ','ПТ','СБ'],
    today: 'Сегодня'
};
LocaleConfig.defaultLocale = 'ru';

const Reminders = (props) => {

    const [calendar, setCalendar] = useState({
        selectedDay : null,
        markedDates : {}
    })

    const handleDayPress = (day) => {
        setCalendar({
            ...calendar,
            selectedDay : day,
            markedDates : {
                ...Object.values(calendar.markedDates).filter((item) => { return !item.userSelected }),
                [day.dateString] : {selected: true, marked: false, userSelected: true, selectedColor: '#7D69E8'}
            }
        });
    }

    return(
        <View style={styles.container}>
            <View style={styles.field}>
                <View style={styles.field__item}>
                    <Text>Начать с</Text>
                    <Text style={styles.field__text}>01.06.2021</Text>
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
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7'
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
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#EAEAEA'
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


});

export default Reminders