import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/AppTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';


export const Tabs = () => {
    return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />
}


const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
        sceneAnimationEnabled={true}
        barStyle={{
            backgroundColor: colores.primary
        }}
        screenOptions={({route}) => ({
            tabBarActiveTintColor: colores.primary,
            tabBarStyle: {
                borderTopColor: colores.primary,
                borderTopWidth: 0,
                elevation: 0
            },
            tabBarLabelStyle: {
                fontSize: 15
            },
            tabBarIcon: ({color, focused}) => {
                let iconName: string = ''
                switch (route.name) {
                    case 'Tab1':
                        iconName = 'trending-up-outline'
                        break;

                    case 'TopTab':
                        iconName ='trophy-outline'
                        break;

                    case 'StackNavigator':
                        iconName ='umbrella-outline'
                        break;
                }

                return <Icon name={iconName} size={25} color='#fff' />
            }
        })}
    >
      <BottomTabAndroid.Screen name="Tab1" options={{title: 'tab uno'}} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="TopTab" options={{title: 'Top Tab'}} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}

// Esto lo debo de revisar como se ve en IOS porque lo hice tratando de que se viera bien en android
// y tiene diferencias con el código del curso
const BottomTabIOS = createBottomTabNavigator();

// Esto lo debo de revisar como se ve en IOS porque lo hice tratando de que se viera bien en android
// y tiene diferencias con el código del curso
const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        screenOptions={({route}) => ({
            tabBarActiveTintColor: colores.primary,
            tabBarStyle: {
                borderTopColor: colores.primary,
                borderTopWidth: 0,
                elevation: 0
            },
            tabBarLabelStyle: {
                fontSize: 15
            },
            tabBarIcon: ({color, focused, size}) => {
                let iconName: string = ''
                switch (route.name) {
                    case 'Tab1':
                        iconName = 'T1'
                        break;

                    case 'Tab2':
                        iconName ='T2'
                        break;

                    case 'StackNavigator':
                        iconName ='ST'
                        break;
                }

                return <Text style={{ color }} >{iconName}</Text>
            }
        })}
        
    >
      {/* <Tab.Screen name="Tab1" options={{title: 'tab uno', tabBarIcon: (props) => <Text style={{color: props.color}}>T1</Text>}} component={Tab1Screen} /> */}
      <BottomTabIOS.Screen name="Tab1" options={{title: 'tab uno'}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="TopTap" options={{title: 'Top Tab'}} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}

export default Tabs