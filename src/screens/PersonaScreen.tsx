import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/AppTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

//Interfaz util
// interface RouteParams {
//     id: number;
//     nombre: string
// }

interface Props extends StackScreenProps<RootStackParams,'Persona'>{}

export const PersonaScreen = ({navigation, route} :Props) => {

    // implementación de interfaz util
    // const params = route.params as RouteParams
    const params = route.params
    const { changeUserName } = useContext(AuthContext)

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre
        })
    }, [])

    useEffect(() => {
        changeUserName(params.nombre)
    }, [])
    
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}> {JSON.stringify(params, null, 3)} </Text>
        </View>
    )
}
