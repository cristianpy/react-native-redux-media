import { 
    CREATE_PROJECT_REQUEST, 
    CREATE_PROJECT_SUCCESS, 
    CREATE_PROJECT_FAILURE
} from '../constants';

export function project(state = {}, action) {
  switch (action.type) {
    case CREATE_PROJECT_REQUEST:
      return {
        creating: true
      };

    case CREATE_PROJECT_SUCCESS:
      return {
        created: true
      };

    case CREATE_PROJECT_FAILURE:
      return { 
        createProjectErrorMessage: action.error
      };

    default:
      return state
  }
}