import React, { createContext, useReducer } from "react"
import { AuthReducer } from './AuthReducer';

//Definir como luce, que información trendré aquí
export interface AuthState {
    isLoggedIn: boolean;
    userName?: string;
    favoriteIcon?: string;
}

//estado inicial
export const AuthInitialState: AuthState = { isLoggedIn: false }

//Lo usaremos para decirle a React cómo luce y qué expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logOut: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    changeUserName: (userName: string) => void;
}


//crear el contexto
export const AuthContext = createContext({} as AuthContextProps)

//Componenete que es el proveedor del estado
export const AuthProvider = ({children}: any) => {

    const [authState, dispatch] = useReducer(AuthReducer, AuthInitialState)

    const signIn = () => {
        dispatch({type: 'signIn'})
    }

    const logOut = () => {
        dispatch({type: 'logOut'})
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({type: 'changeFavIcon', payload: iconName})
    }

    const changeUserName = (userName: string) => {
        dispatch({type: 'changeUserName', payload: userName})
    }
    
    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            logOut,
            changeFavoriteIcon,
            changeUserName
        }}>
            { children }
        </AuthContext.Provider>
    )
}