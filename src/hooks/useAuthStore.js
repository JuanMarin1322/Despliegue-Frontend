import { useDispatch, useSelector } from "react-redux"

import { clearErrorMessage, onChecking, onLogin, onLogout, onLogoutEquipos, onLogoutJugadores, onLogoutNoticia, onLogoutProducto } from "../store";
import { amcorApi } from "../api";

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async({ correo, password }) => {

        dispatch( onChecking() );

        try {

            const { data } = await amcorApi.post('/sign-in',{ correo, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({ id: data.id, nombre: data.nombre, correo: data.correo, rol: data.rol, estado: data.estado, puntos: data.puntos  }) );

        } catch (error) {

            dispatch( onLogout('Credenciales incorrectas') );

            setTimeout(() =>{
                dispatch( clearErrorMessage() )
            }, 10);

        }

    }

    const checkAuthToken = async() => {

        const token = localStorage.getItem('token')
        
        if( !token ) return dispatch( onLogout() );

        try {
            
            const { data } = await amcorApi.get('/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({ id: data.id, nombre: data.nombre, correo: data.correo, rol: data.rol, estado: data.estado, puntos: data.puntos }) );

        } catch (error) {
            localStorage.clear();
            dispatch( onLogout() );
        }

    }

    const startLogout = () => {

        localStorage.clear();
        dispatch( onLogout() );
        dispatch( onLogoutJugadores() )
        dispatch( onLogoutEquipos() )
        dispatch( onLogoutProducto() )
        dispatch( onLogoutNoticia() )

    }

    return {

        status,
        user,
        errorMessage,

        checkAuthToken,
        startLogin,
        startLogout,

    }

}