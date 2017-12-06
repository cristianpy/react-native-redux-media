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
      return {};

    case REGISTER_FAILURE:
      return {};

    default:
      return state
  }
}