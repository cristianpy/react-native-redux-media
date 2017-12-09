import { 
    REGISTER_REQUEST, 
    REGISTER_SUCCESS, 
    REGISTER_FAILURE,
} from '../constants';

export function registration(state = {}, action) {
  switch (action.type) {   
    case REGISTER_REQUEST:
      return {
        registering: true 
      };

    case REGISTER_SUCCESS:
      return {
        registered: true,
        user: action.user
      };

    case REGISTER_FAILURE:
      return {
        registering: false,
        registerErrorMessage: action.error
      };

    default:
      return state
  }
}