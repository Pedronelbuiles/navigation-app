import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { colores } from '../theme/AppTheme';
import { AuthContext } from '../context/AuthContext';

interface Props {
    name: string;
}

export const TouchableIcons = ({name}:Props) => {

    const { changeFavoriteIcon } = useContext(AuthContext)

    return (
        <TouchableOpacity
            onPress={() => changeFavoriteIcon(name)}
        >
            <Icon name={name} size={80} color={colores.primary} />
        </TouchableOpacity>
    )
}
