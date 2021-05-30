import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const SingleTreatments = (props) => {
    const [status, setStatus] = useState({
        status : 'PENDING'
    })

    const changeCards = () => {
        status.status === 'PENDING' ? setStatus({ status : 'FINISHED'}) : setStatus({ status : 'PENDING'})
    }

    return(
        <View style={styles.container}>

            <Text style={styles.heading}>Календарь приема</Text>

            <View style={styles.switch__container}>

                <TouchableOpacity onPress={changeCards} 
                    style={ status.status === 'PENDING' ? [styles.button__switch, styles.button__switch_active] : styles.button__switch}>
                    <Text style={  status.status === 'PENDING' ? [styles.buttonbutton__switch_label, styles.button__switch_label_active] : styles.button__switch_label}>В процессе</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={changeCards} 
                    style={ status.status === 'FINISHED' ? [styles.button__switch, styles.button__switch_active] : styles.button__switch}>
                    <Text style={  status.status === 'FINISHED' ? [styles.buttonbutton__switch_label, styles.button__switch_label_active] : styles.button__switch_label}>Завершенные</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.card}>
                <Text style={styles.card__heading}>Азитромицин таблетки</Text>
                <Text style={styles.card__element}>Начало: 01.06.2021</Text>
                <Text style={styles.card__element}>Осталось: 14 дней</Text>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFFFF'
    },

    card: {
        padding : 20,
        borderWidth: 1,
        borderColor: '#D3D4FF',
        borderRadius: 8
    },

    card__heading: {
        fontWeight: 'bold', 
        fontSize: 17,
        marginBottom: 10
    },

    card__element: {
        fontSize : 17,
        marginBottom: 10
    },
    
    button__container: {
        marginTop: '10%',
    },

    button__clear: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor : 'rgba(229, 229, 229, 1)',
        padding : 20,
    },

    button__clear_label: {
        fontSize: 17,
    },

    switch__container: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: '#F6F6F6',
        borderRadius: 100,
        borderWidth: 2,
        backgroundColor: '#F6F6F6',
        marginBottom: 32
    },

    button__switch : {
        width: '50%',
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#F6F6F6'
    },

    button__switch_active : {
        borderRadius: 100,
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },

    button__switch_label : {
        fontSize: 17,
        color: 'rgba(151, 151, 151, 1)'
    },

    button__switch_label_active : {
        fontSize: 17,
        color: 'rgba(125, 105, 232, 1)',
    },

    heading : {
        marginBottom: 16,
        fontSize: 22,
        fontWeight: 'bold'
    }

});


export default SingleTreatments