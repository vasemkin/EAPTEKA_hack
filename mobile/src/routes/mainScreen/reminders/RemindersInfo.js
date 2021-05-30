import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const RemindersInfo = (props) => {

    return(
        <View style={styles.container}>
            
            <View style={[styles.field, styles.field_single]}>
                <Text>Азитромицин таблетки</Text>
            </View>
            
            <View style={styles.field}>
                <View style={styles.field__item}>
                    <Text>Начать с</Text>
                    <Text style={styles.field__text}>01.06.2021</Text>
                </View>
                <View style={styles.field__item}>
                    <Text>Количество дней</Text>
                    <Text style={styles.field__text}>14</Text>
                </View>
                <View style={[styles.field__item, styles.field__item_last]}>
                    <Text>Периодичность приема</Text>
                    <Text style={styles.field__text}>Каждый день</Text>
                </View>
            </View>
            
            <View style={styles.field}>
                <View style={styles.field__item}>
                    <Text>Начать с</Text>
                    <Text style={styles.field__text}>01.06.2021</Text>
                </View>
                <View style={styles.field__item}>
                    <Text>Количество дней</Text>
                    <Text style={styles.field__text}>14</Text>
                </View>
                <View style={[styles.field__item, styles.field__item_last]}>
                    <Text>Периодичность приема</Text>
                    <Text style={styles.field__text}>Каждый день</Text>
                </View>
            </View>
            
            <View style={styles.field}>
                <View style={styles.field__item}>
                    <Text>Начать с</Text>
                    <Text style={styles.field__text}>01.06.2021</Text>
                </View>
                <View style={styles.field__item}>
                    <Text>Количество дней</Text>
                    <Text style={styles.field__text}>14</Text>
                </View>
                <View style={[styles.field__item, styles.field__item_last]}>
                    <Text>Периодичность приема</Text>
                    <Text style={styles.field__text}>Каждый день</Text>
                </View>
            </View>
            
            <View style={styles.field}>
                <View style={[styles.field__item, styles.field__item_last]}>
                    <Text>Периодичность приема</Text>
                    <Text style={styles.field__text}>Каждый день</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.button__text}>Сохранить</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#F7F7F7'
    },

    field: {
        paddingRight: 16,
        paddingLeft: 16,
        backgroundColor: '#FFFFFF',
        marginBottom: 24
    },

    field_single: {
        paddingTop: 10,
        paddingBottom: 10,
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

    field__text: {
        color: 'rgba(151, 151, 151, 1)'
    },

    button: {
        position: 'absolute',
        bottom: '10%',
        alignSelf: 'center',
        width: '80%',
        backgroundColor: '#7D69E8',
        borderRadius: 100,
        padding: 10
    },

    button__text: {
        color: '#FFFFFF',
        alignSelf: 'center'
    }

})

export default RemindersInfo