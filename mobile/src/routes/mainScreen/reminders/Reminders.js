import * as React from 'react'
import {StyleSheet, View, FlatList} from "react-native";
import {LocaleConfig, WeekCalendar} from "react-native-calendars";

LocaleConfig.locales['ru'] = {
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthNamesShort: ['Янв.','Февр.','Март','Апрель','Май','Июнь','Июль.','Август','Сент.','Окт.','Нояб.','Дек.'],
    dayNames: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
    dayNamesShort: ['ВС','ПН','ВТ','СР','ЧТ','ПТ','СБ'],
    today: 'Сегодня'
};
LocaleConfig.defaultLocale = 'ru';

export default class Reminders extends React.Component {
    constructor(props) {
        super(props);
        this.date = new Date().getDate(); //Current Date
        this.month = new Date().getMonth() + 1; //Current Month
        this.year = new Date().getFullYear(); //Current Year
        this.state = {
            currentDate: this.year + '/' + this.month + '/' + this.date,
            markedDates: {}
        }
    }
    handleClickCalendar (day) {
        if (Object.keys(this.state.markedDates).length !== 0) {
            for (let markedDate in this.state.markedDates) {
                if (day.dateString === markedDate) {
                    const newlist = Object.assign({}, this.state.markedDates);
                    this.setState({markedDates: newlist});
                } else {
                    let newMarkedDate = {
                        [`${day.dateString}`]: {selected: true, marked: true, selectedColor: 'purple'}
                    }
                    let newlist = Object.assign(this.state.markedDates, newMarkedDate);
                    this.setState({markedDates: newlist});
                }
            }
        } else {
            let newMarkedDate = {
                [`${day.dateString}`]: {selected: true, marked: true, selectedColor: 'purple'}
            }
            let newlist = Object.assign(this.state.markedDates, newMarkedDate);
            this.setState({markedDates: newlist});
        }
    }
    render(){
        return(
            <View style={reminderStyle.container}>
                <WeekCalendar
                    onDayPress={(day) => this.handleClickCalendar(day)}
                    markedDates={this.state.markedDates}
                />
                <FlatList>

                </FlatList>
            </View>
        )
    }
}

const reminderStyle = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
    }
});
