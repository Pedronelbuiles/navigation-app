import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcons } from '../components/TouchableIcons';
import { styles, colores } from '../theme/AppTheme';

export const Tab1Screen = () => {

    const {top} = useSafeAreaInsets()

    useEffect(() => {
        console.log("tab1");
    }, [])

    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: top + 10
        }}>
            <Text style={styles.title}>Iconos</Text>
            <Text>
                <TouchableIcons name="analytics-outline" />
                <TouchableIcons name="earth-outline" />
                <TouchableIcons name="briefcase-outline" />
                <TouchableIcons name="bug-outline" />
                <TouchableIcons name="checkmark-done-outline" />
                <TouchableIcons name="flame-outline" />
            </Text>
        </View>
    )
}
