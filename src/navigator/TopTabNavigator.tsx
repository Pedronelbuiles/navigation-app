import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/AppTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const {top: paddingTop} = useSafeAreaInsets()


  return (
    <Tab.Navigator
        style={{ paddingTop }}
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        screenOptions= {({route}) => ({
            tabBarPressColor: colores.primary,
            tabBarShowIcon: true,
            tabBarIndicatorStyle: {
                backgroundColor: colores.primary
            },
            tabBarStyle:{
                shadowColor: 'transparent',
                elevation: 0
            },
            tabBarIcon: ({color, focused}) => {
                let iconName: string = ''
                switch (route.name) {
                    case 'Chat':
                        iconName = 'toggle-outline'
                        break;

                    case 'Contacts':
                        iconName ='stats-chart-outline'
                        break;

                    case 'Albums':
                        iconName ='snow-outline'
                        break;
                }

                return <Icon name={iconName} size={25} color={colores.primary} />
            }
        })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}