import { userService } from '../services';
import { 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE, 

    LOGOUT,
    REGISTER_REQUEST, 
    REGISTER_SUCCESS, 
    REGISTER_FAILURE,

    USERINFO_REQUEST,
    USERINFO_SUCCESS, 
    USERINFO_FAILURE
} from '../constants';

export const userActions = {
    login,
    logout,
    register,
    getUserInfo
};

login = (username, password) => {
    return async dispatch => {
        dispatch(request({ username }));
        try {
            response = await userService.login(username, password);
            user = await response.json();
            dispatch(success(user));
        } catch (error) {
            dispatch(failure(error));
        }
    };

    request = (user)  => { return { type: LOGIN_REQUEST, user } }
    success = (user)  => { return { type: LOGIN_SUCCESS, user } }
    failure = (error) => { return { type: LOGIN_FAILURE, error } }
}

logout = () => {
    userService.logout();
    return { type: LOGOUT };
}

register = (user) => {
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

getUserInfo = () => {
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