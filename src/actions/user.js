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
            user = {
                token: responseJson.token,
                username: username
            }
            dispatch(success(user));
            navigate('Workspace');
        } catch (error) {
            dispatch(failure(error));
        }
    };

}

export const setPassword = (password) => {
    return { type: SET_PASSWORD, password };
}

export const logout = () => {
    logout();
    return { type: LOGOUT };
}

export const register = (user) => {
    return async dispatch => {
        dispatch(request(user));
        try {
            response = await userService.register(user);
            user = await response.json();
            dispatch(success());
        } catch (error) {
            dispatch(failure(error));
        }
    };

    request = (user)  => { return { type: REGISTER_REQUEST, user } }
    success = (user)  => { return { type: REGISTER_SUCCESS, user } }
    failure = (error) => { return { type: REGISTER_FAILURE, error } }
}

export const getUserInfo = () => {
    return async dispatch => {
        dispatch(request());
        try {
            response = await userService.getUserInfo();
            user = await response.json();
            dispatch(success(user));
        } catch (error) {
            dispatch(failure(error))
        }
        
    };

    request = () =>  { return { type: USERINFO_REQUEST } }
    success = (user) => { return { type: USERINFO_SUCCESS, users } }
    failure = (error) =>  { return { type: USERINFO_FAILURE, error } }
}