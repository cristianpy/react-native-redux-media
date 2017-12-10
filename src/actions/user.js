import { userService } from '../services';

import { 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE, 

    SET_PASSWORD,

    LOGOUT,
    REGISTER_REQUEST, 
    REGISTER_SUCCESS, 
    REGISTER_FAILURE,

    CHANGE_PASSWORD_REQUEST,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_FAILURE,

    USERINFO_REQUEST,
    USERINFO_SUCCESS, 
    USERINFO_FAILURE
} from '../constants';

export const login = (username, password, navigate) => {
    const request = (username)  => { return { type: LOGIN_REQUEST, username } }
    const success = (user)  => { return { type: LOGIN_SUCCESS, user } }
    const failure = (error) => { return { type: LOGIN_FAILURE, error } }
    return async dispatch => {
        try {
            let user = {}
            dispatch(request(username));
            response = await userService.login(username, password);
            responseJson = await response.json();
            dispatch(success(responseJson));
            navigate('Workspace');
        } catch (error) {
            dispatch(failure('Error in authentication'));
        }
    };

}

export const setPassword = (password) => {
    return { type: SET_PASSWORD, password };
}

export const logout = (resetActions, navigation) => {
    navigation.dispatch(resetActions);
    return { type: LOGOUT }
}

export const changePassword = (token, newPassword, resetActions, navigation) => {
    const request = ()  => { return { type: CHANGE_PASSWORD_REQUEST } }
    const success = ()  => { return { type: CHANGE_PASSWORD_SUCCESS} }
    const failure = (error) => { return { type: CHANGE_PASSWORD_FAILURE, error } }

    return async dispatch => {
        dispatch(request());
        try {
            response = await userService.changePassword(token, newPassword);
            // user = await response.json();
            console.log('uer response', response)
            dispatch(success());
            navigation.dispatch(resetActions);
        } catch (error) {
            dispatch(failure('Error changing password'));
        }
    };
}

export const register = (email, fullName, password, resetActions, navigation) => {
    const request = ()  => { return { type: REGISTER_REQUEST } }
    const success = (user)  => { return { type: REGISTER_SUCCESS, user } }
    const failure = (error) => { return { type: REGISTER_FAILURE, error } }

    return async dispatch => {
        dispatch(request());
        try {
            response = await userService.register(email, fullName, password);
            user = await response.json();
            dispatch(success(user));
            navigation.dispatch(resetActions);
        } catch (error) {
            dispatch(failure(error));
        }
    };

}

export const getUserInfo = (token) => {
    const request = () =>  { return { type: USERINFO_REQUEST } }
    const success = (user) => { return { type: USERINFO_SUCCESS, user } }
    const failure = (error) =>  { return { type: USERINFO_FAILURE, error } }

    return async dispatch => {
        dispatch(request());
        try {
            response = await userService.getUserInfo(token);
            user = await response.json();
            console.log('GET USER RESPONSE:', user);            
            dispatch(success(user));
        } catch (error) {
            dispatch(failure(error))
        }
        
    };

}