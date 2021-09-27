import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { styles, colores } from '../theme/AppTheme';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

// const Stack = createStackNavigator()

// const SettingsStackScreen = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen 
//         name="Settings"
//         component={SettingsScreen}
//       />
//     </Stack.Navigator>
//   )
// }

export const MenuLateral = () => {

  return (
    <Drawer.Navigator 
        drawerContent={(props) => <MenuInterno {...props}/>}
    >
      <Drawer.Screen name="Tabs" options={{ headerShown: false, title: 'home' }} component={Tabs} />
      <Drawer.Screen name="Settings" options={{title: 'Settings'}} component={SettingsScreen} />
      {/* <Drawer.Screen name="Settings" options={{title: 'Settings'}} component={SettingsStackScreen} /> */}
    </Drawer.Navigator>
  );
}

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder-480x480.gif'
          }}
          style={styles.avatar}
        />
      </View>

      {/* Opciones de menu */}
      <View style={styles.menucontainer}>
        <TouchableOpacity 
          style={styles.menuBoton}
          onPress={() => navigation.navigate('Tabs')}
        >
          <Text>
            <Icon name="rocket-outline" size={25} color={colores.primary} />
          </Text>
          <Text style={styles.menuItem}>
            Navegacion
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.menuBoton}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text>
            <Icon name="settings-outline" size={25} color={colores.primary} />
          </Text>
          <Text style={styles.menuItem}>
            Ajustes
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
}