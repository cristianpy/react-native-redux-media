import { 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE, 

    SET_PASSWORD,

    LOGOUT,
} from '../constants';

export function authentication(state = {}, action) {
  switch (action.type) {  
    case LOGIN_REQUEST:
      return {
        loggingIn: true
      };
    
    case SET_PASSWORD:
      return {
        password: action.password
    };

    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };

    case LOGIN_FAILURE:
      return {
        loggingIn: false,
        loginErrorMessage: action.error
      };

    case LOGOUT:
      return {
        user: {},
        loggedIn: false
      };

    default:
      return state
  }
}