import { 
    USERINFO_REQUEST,
    USERINFO_SUCCESS, 
    USERINFO_FAILURE
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

    default:
      return state
  }
}