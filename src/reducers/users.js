import { Navigate } from "react-router-dom";
import {  LOGOUT, LOGIN, SIGNUP } from "../constants";
import Cookies from 'js-cookie';
 
const reducer = (state={
    authData: Cookies.get('user') ? JSON.parse( Cookies.get('user')) : {}, 
}, action) => {
    switch(action.type) {

        case  SIGNUP: {
            // localStorage.setItem('user', JSON.stringify(action?.payload?.user));
            // localStorage.setItem('token', action?.payload?.token.slice(action?.payload?.token.indexOf('|')+1));
            // localStorage.setItem('tokenNumber', action?.payload?.token.slice(0, action?.payload?.token.indexOf('|')));
            // console.log('current token', action?.payload?.token.slice(2))

            Cookies.set('user', JSON.stringify(action?.payload?.user), {
                expires: 1,
                secure: true,
                sameSite: 'strict',
                path: '/',
            });

            Cookies.set('token', action?.payload?.token.slice(action?.payload?.token.indexOf('|')+1), {
                expires: 1,
                secure: true,
                sameSite: 'strict',
                path: '/',
            });

            return {...state, authData: action?.payload}
        }
        case LOGIN: {
            // localStorage.setItem('user', JSON.stringify(action?.payload?.user));
            // localStorage.setItem('token', action?.payload?.token.slice(action?.payload?.token.indexOf('|')+1));
            // localStorage.setItem('tokenNumber', action?.payload?.token.slice(0, action?.payload?.token.indexOf('|')));
            
            console.log('current token', action?.payload?.token.slice(2))

            Cookies.set('user', JSON.stringify(action?.payload?.user), {
                expires: 1,
                secure: true,
                sameSite: 'strict',
                path: '/',
            });

            Cookies.set('token', action?.payload?.token.slice(action?.payload?.token.indexOf('|')+1), {
                expires: 1,
                secure: true,
                sameSite: 'strict',
                path: '/',
            });
            return {...state, authData: action?.payload}
        }
        case LOGOUT: {
            Cookies.remove('user');
            Cookies.remove('token');
            Cookies.remove('tokenNumber');
            return {...state, authData: {}}
        }
        default: {
            return state;
        }
    }
}
export default reducer;