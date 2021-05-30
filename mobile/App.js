import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginView from "./src/routes/loginView/LoginView";
import MainMenuNavigator from "./src/routes/mainScreen/MainMenuNavigator";
import MyTreatments from './src/routes/mainScreen/treatment/myTreatments/MyTreatments';
import Reminders from './src/routes/mainScreen/reminders/Reminders';
import RemindersInfo from './src/routes/mainScreen/reminders/RemindersInfo';
import SingleTreatments from './src/routes/mainScreen/reminders/SingleTreatments';
import MyTreatmentDescription from './src/routes/mainScreen/treatment/myTreatmentDescription/MyTreatmentDescription';
import {Feather} from '@expo/vector-icons';
const Stack = createStackNavigator();
import {RFValue} from 'react-native-responsive-fontsize';


const userIsAuthorized = 1;

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
            <Stack.Screen name='HomeStack' component={MainMenuNavigator} options={{headerShown: false}}/>
            <Stack.Screen
                name='MyTreatments'
                component={MyTreatments}
                options={({ navigation }) => ({
                    title: 'Мои назначения',
                    headerTitleStyle: {
                        fontFamily: 'System',
                        fontSize: RFValue(16, 580),
                    },
                    headerLeft: () => (
                        <Feather name="chevron-left" size={40} color={'#7D69E8'}
                                 style={{marginLeft: 20}}
                                 onPress={() => navigation.goBack()}
                        />
                    )
                })}
            />
              <Stack.Screen 
                name='MyTreatmentDescription'
                component={MyTreatmentDescription} options={{headerShown: false}}
              />

              <Stack.Screen 
                name='Reminders'
                component={Reminders} 
                options={({ navigation }) => ({
                  title: 'Мои назначения',
                  headerTitleStyle: {
                      fontFamily: 'System',
                      fontSize: RFValue(16, 580),
                  },
                  headerLeft: () => (
                      <Feather name="chevron-left" size={40} color={'#7D69E8'}
                               style={{marginLeft: 20}}
                               onPress={() => navigation.goBack()}
                      />
                  )
                })}
                />

                <Stack.Screen 
                  name='SingleTreatments'
                  component={SingleTreatments} 
                  options={({ navigation }) => ({
                    title: '',
                    headerTitleStyle: {
                        fontFamily: 'System',
                        fontSize: RFValue(16, 580),
                    },
                    headerLeft: () => (
                        <Feather name="chevron-left" size={40} color={'#7D69E8'}
                                 style={{marginLeft: 20}}
                                 onPress={() => navigation.goBack()}
                        />
                    )
                  })}
                  />

                  <Stack.Screen 
                    name='RemindersInfo'
                    component={RemindersInfo} 
                    options={({ navigation }) => ({
                      title: 'Календарь приема',
                      headerTitleStyle: {
                          fontFamily: 'System',
                          fontSize: RFValue(16, 580),
                      },
                      headerLeft: () => (
                          <Feather name="chevron-left" size={40} color={'#7D69E8'}
                                   style={{marginLeft: 20}}
                                   onPress={() => navigation.goBack()}
                          />
                      )
                    })}
                    />

              {/*<Stack.Screen name="LoginView" component={LoginView} options={{headerShown: false}}/>*/}
          </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
