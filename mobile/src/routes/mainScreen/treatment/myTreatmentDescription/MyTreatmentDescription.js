import * as React from 'react'
import {StyleSheet, View, Text, Image, ScrollView, TouchableOpacity} from "react-native";
import {RFValue} from 'react-native-responsive-fontsize';
import qr_ico from '../../../../assets/systemAssets/qr_ico.png'
import azitromicin from '../../../../assets/drugsAssets/azitromicin.png'
import paracetomol from '../../../../assets/drugsAssets/paracetomol.png'
import nurofen from '../../../../assets/drugsAssets/nurofen.png'
import shop_ico from '../../../../assets/systemAssets/shop_ico.png'


export default class MyTreatmentDescription extends React.Component {
    constructor(props) {
        super(props);
        this.myTreatment = this.props.route.params;
        this.drugs = [
            {name: 'Азитромицин таблетки', recipe: true, dosage: '250мг', numOfDays: '14', periodicity: 'Каждый день',
                frequency: '2 раза в день по 3 шт', timeOfDay: 'утро, вечер', terms: 'до еды', img: azitromicin},
            {name: 'Парацетамол', recipe: false, dosage: '250мг', numOfDays: '14', periodicity: 'Каждый день',
                frequency: '2 раза в день по 3 шт', timeOfDay: 'утро, вечер', terms: 'до еды', img: paracetomol},
            {name: 'Нурофен', recipe: false, dosage: '250мг', numOfDays: '14', periodicity: 'Каждый день',
                frequency: '2 раза в день по 3 шт', timeOfDay: 'утро, вечер', terms: 'до еды', img: nurofen},
        ]
        this.state = {}
    }

    render(){
        const recipeView = (isRecipe) => {
            if(isRecipe){
                return(
                    <View style={{
                        width: '80%', height: '50%',
                        flexDirection: 'row', flexWrap: 'wrap'}}>
                        <View style={TreatmentDescriptionStyle.recipe}>
                            <Text style={TreatmentDescriptionStyle.recipeText}>по рецепту</Text>
                        </View>
                        <View style={[TreatmentDescriptionStyle.recipe, {marginLeft: 10}]}>
                            <Text style={TreatmentDescriptionStyle.recipeText}>самовывоз</Text>
                        </View>
                    </View>
                )
            }
        }
        return(
            <View style={TreatmentDescriptionStyle.container}>
                <View style={TreatmentDescriptionStyle.headerView}>
                    <Text style={TreatmentDescriptionStyle.headerTitle}>
                        {`Назначение№${this.myTreatment.id}       ${this.myTreatment.date}`}
                    </Text>
                </View>
                <View style={TreatmentDescriptionStyle.qrViewStyle}>
                    <Text style={TreatmentDescriptionStyle.qrText}>Qr-код назначения</Text>
                    <Image source={qr_ico} style={TreatmentDescriptionStyle.qrIcon}/>
                </View>
                <View style={TreatmentDescriptionStyle.outputView}>
                    <Text style={TreatmentDescriptionStyle.outputText}>Поликлиника</Text>
                    <Text style={TreatmentDescriptionStyle.outputName}>{`${this.myTreatment.hospitalNum}`}</Text>
                </View>
                <View style={TreatmentDescriptionStyle.outputView}>
                    <Text style={TreatmentDescriptionStyle.outputText}>Лечащий врач</Text>
                    <Text style={TreatmentDescriptionStyle.outputName}>{`${this.myTreatment.doctor}`}</Text>
                </View>
                <View style={{height: '5%', width: '90%',}}>
                    <Text style={TreatmentDescriptionStyle.outputText}>Препараты</Text>
                </View>
                <ScrollView
                    vertical
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={10}
                >
                    <View style={TreatmentDescriptionStyle.categoriesScroll}>
                        {this.drugs.map((item, i) => (
                            <View style={TreatmentDescriptionStyle.drugDescriptionView}>
                                <View style={TreatmentDescriptionStyle.headerDescView}>
                                    <View style={{width: '30%'}}>
                                        <Image source={item.img} style={TreatmentDescriptionStyle.drugImage}/>
                                    </View>
                                    <View style={TreatmentDescriptionStyle.headerDesc}>
                                        <View style={{width:'80%', height: '50%'}}>
                                            <Text style={TreatmentDescriptionStyle.headerDescTitle}>{item.name}</Text>
                                        </View>
                                        {recipeView(item.recipe)}
                                        <Image style={TreatmentDescriptionStyle.shopIconStyle}
                                            source={shop_ico}/>
                                    </View>
                                </View>
                                <View style={TreatmentDescriptionStyle.descriptionView}>
                                    <View style={TreatmentDescriptionStyle.leftSide}>
                                        <View style={TreatmentDescriptionStyle.paramView}>
                                            <Text style={{color: '#979797'}}>Дозировка</Text>
                                        </View>
                                        <View style={TreatmentDescriptionStyle.paramView}>
                                            <Text style={{color: '#979797'}}>Периодичность приема</Text>
                                        </View>
                                        <View style={TreatmentDescriptionStyle.paramView}>
                                            <Text style={{color: '#979797'}}>Частота приема</Text>
                                        </View>
                                        <View style={TreatmentDescriptionStyle.paramView}>
                                            <Text style={{color: '#979797'}}>Время дня</Text>
                                        </View>
                                        <View style={TreatmentDescriptionStyle.paramView}>
                                            <Text style={{color: '#979797'}}>Условия приема</Text>
                                        </View>
                                    </View>
                                    <View style={TreatmentDescriptionStyle.rightSide}>
                                        <View style={TreatmentDescriptionStyle.itemView}>
                                            <Text style={{textAlign: 'right'}}>{`${item.dosage}`}</Text>
                                        </View>
                                        <View style={TreatmentDescriptionStyle.itemView}>
                                            <Text style={{textAlign: 'right'}}>{`${item.numOfDays}`}</Text>
                                        </View>
                                        <View style={TreatmentDescriptionStyle.itemView}>
                                            <Text style={{textAlign: 'right'}}>{`${item.frequency}`}</Text>
                                        </View>
                                        <View style={TreatmentDescriptionStyle.itemView}>
                                            <Text style={{textAlign: 'right'}}>{`${item.timeOfDay}`}</Text>
                                        </View>
                                        <View style={TreatmentDescriptionStyle.itemView}>
                                            <Text style={{textAlign: 'right'}}>{`${item.terms}`}</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={TreatmentDescriptionStyle.startButton}>
                                        <Text style={TreatmentDescriptionStyle.buttonText}>Начать прием</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </View>
                    <View style={{justifyContent: 'center', width: '100%',
                        height: 200, alignItems: 'center'}}>
                        <TouchableOpacity
                            style={TreatmentDescriptionStyle.completeCourseButton}
                            onPress={()=>{}}
                        >
                            <Text style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>Пройти весь курс</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={TreatmentDescriptionStyle.finishCourseButton}
                            onPress={()=>{}}
                        >
                            <Text style={{textAlign: 'center', color: '#7D69E8', fontWeight: 'bold'}}>Завершить курс</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const TreatmentDescriptionStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    headerView: {
        width: '100%',
        height: '15%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    headerTextView: {
        width: '40%',
        alignItems: 'center',
        height: '10%'
    },
    headerTitle: {
        fontSize: RFValue(15, 580),
    },
    qrViewStyle: {
        width: '90%',
        height: '7%',
        borderRadius: 10,
        justifyContent: 'space-between',
        padding: 15,
        flexWrap: 'wrap',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#E6E1FF',
    },
    qrText: {
        fontSize: RFValue(13, 580),
    },
    qrIcon: {
        width: 30,
        height: 30,
        alignSelf: 'center'
    },
    outputView: {
        marginTop: '5%',
        width: '90%',
        height: '10%',
    },
    outputText: {
        fontSize: RFValue(15, 580),
    },
    outputName: {
        fontSize: RFValue(12, 580),
        color: 'gray'
    },
    categoriesScroll: {
        paddingBottom: '10%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    drugDescriptionView: {
        width: 363,
        height: 400,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#D3D4FF',
        margin: '5%'
    },
    drugImage: {
        marginLeft: 20,
        resizeMode: 'contain',
        width: '60%',
        height: '100%',
    },
    headerDescView: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        height: '25%',
        borderBottomWidth: 1,
        borderColor: '#E6E1FF',
    },
    headerDesc: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: '70%',
        height: '100%',
    },
    headerDescTitle: {
        marginTop: 15,
        fontWeight: 'bold',
        fontSize: RFValue(10, 580),
        color: '#7D69E8',
    },
    shopIconStyle: {
        position: 'absolute',
        right: 5,
        top: 20,
        width: 40,
        height: 30,
        resizeMode: 'contain',
    },
    descriptionView: {
        height: '65%',
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    leftSide: {
        width: '50%',
        height: '85%',
    },
    rightSide: {
        width: '50%',
        height: '85%',
        paddingRight: 10,
    },
    paramView: {
        width: '100%',
        paddingLeft: 10,
        height: '15%',
        justifyContent: 'center',
        marginTop: 8,

    },
    itemView: {
        width: '100%',
        paddingLeft: 10,
        height: '15%',
        justifyContent: 'center',
        marginTop: 8,

    },
    startButton: {
        width: '90%',
        height: '20%',
        backgroundColor: '#D3D4FF',
        borderRadius: 30,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#7D69E8',
        textAlign: 'center'
    },
    recipe: {
        width: '40%',
        height: '40%',
        backgroundColor: '#FF7A00',
        borderRadius: 5
    },
    recipeText: {
        color: 'white',
        textAlign: 'center',
        fontSize: RFValue(8, 580),
    },
    completeCourseButton: {
        width: '80%',
        height: 50,
        backgroundColor: '#7D69E8',
        borderRadius: 20,
        justifyContent: 'center',
        marginBottom: '5%'
    },
    finishCourseButton: {
        width: '80%',
        height: 50,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#7D69E8',
        justifyContent: 'center'
    }
});
