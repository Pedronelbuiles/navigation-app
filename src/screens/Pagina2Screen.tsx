import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles, colores } from '../theme/AppTheme';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<any, any>{}

export const Pagina2Screen = ({navigation}: Props) => {

    useEffect(() => {
        navigation.setOptions({
            title: 'Holi',
            headerBackTitle: ''
        })
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina2Screen</Text>

            <Button
                title="Ir página 3"
                onPress={ () => navigation.navigate('Pagina3')}
            />

            <Text style={{marginVertical: 20, fontSize: 20, marginLeft: 5}} >Navegar con argumentos</Text>

            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity 
                    style={{...styles.botonGrande, backgroundColor: 'black'}}
                    onPress={() => navigation.navigate('Persona', {
                        id: 1,
                        nombre: 'Pedro'
                    })}
                >
                    <Icon name="heart" size={25} color="#FF0000" />
                    <Text style={styles.botonGrandeTexto}>Pedro</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{...styles.botonGrande, backgroundColor: '#5856D6'}}
                    onPress={() => navigation.navigate('Persona', {
                        id: 2,
                        nombre: 'Maria'
                    })}
                >
                    <Icon name="heart" size={25} color="#FF0000" />
                    <Text style={styles.botonGrandeTexto}>Maria</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}
