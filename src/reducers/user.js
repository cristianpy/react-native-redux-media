import { 
    USERINFO_REQUEST,
    USERINFO_SUCCESS, 
    USERINFO_FAILURE,

    CHANGE_PASSWORD_REQUEST,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_FAILURE
} from '../constants';

export function user(state = {}, action) {
  switch (action.type) {
    case USERINFO_REQUEST:
      return {
        loading: true
      };

    case USERINFO_SUCCESS:
      return {
        user: action.user
      };

    case USERINFO_FAILURE:
      return { 
        userErrorMessage: action.error
      };

    case CHANGE_PASSWORD_REQUEST:
      return {
        updatingPassword: true
      };
    
    case CHANGE_PASSWORD_SUCCESS:
      return {
        updatedPassword: true
      };

    case CHANGE_PASSWORD_FAILURE:
      return {
        changePasswordErrorMessage: action.error
      };

    default:
      return state
  }
}