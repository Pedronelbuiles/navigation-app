import React, { useContext } from 'react'
import { View, Button, Text } from 'react-native';
import { styles } from '../theme/AppTheme';
import { AuthContext } from '../context/AuthContext';

export const ContactsScreen = () => {

    const { authState: {isLoggedIn}, signIn } = useContext(AuthContext)

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Chat Screen</Text>

            {
                !isLoggedIn &&
                    <Button 
                        title="SignIn"
                        onPress={signIn}
                    />
            }
        </View>
    )
}