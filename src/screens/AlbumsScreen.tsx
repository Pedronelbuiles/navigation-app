import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/AppTheme';
import { AuthContext } from '../context/AuthContext';

export const AlbumsScreen = () => {
    const { authState: {isLoggedIn}, logOut } = useContext(AuthContext)

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Chat Screen</Text>
            {
                isLoggedIn &&
                    <Button 
                        title="LogOut"
                        onPress={logOut}
                    />
            }
        </View>
    )
}