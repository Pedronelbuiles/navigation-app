import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

    const {width} = useWindowDimensions()

  return (
    <Drawer.Navigator 
        screenOptions={{
            drawerType : width >= 768 ? 'permanent' : 'front'
        }}
    >
      <Drawer.Screen name="StackNavigator" options={{ headerShown: false, title: 'home' }} component={StackNavigator} />
      <Drawer.Screen name="Settings" options={{title: 'Settings'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}