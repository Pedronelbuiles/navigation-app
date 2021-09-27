import { DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles, colores } from '../theme/AppTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

// interface Props extends StackScreenProps<any, any>{}
interface Props extends DrawerScreenProps<any, any>{}

export const Pagina1Screen = ({navigation}: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    style={{
                        marginLeft: 10
                    }}
                    onPress={() => navigation.toggleDrawer()}
                >
                    <Icon name="menu-outline" color={colores.primary} size={35} />
                </TouchableOpacity>
            )
        })
        
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina1Screen</Text>

            <Button
                title="Ir página 2"
                onPress={ () => navigation.navigate('Pagina2')}
            />
        </View>
    )
}
