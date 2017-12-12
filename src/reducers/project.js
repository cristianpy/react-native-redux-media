import { 
    CREATE_PROJECT_REQUEST, 
    CREATE_PROJECT_SUCCESS, 
    CREATE_PROJECT_FAILURE,

    GET_PROJECTS_REQUEST,
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_FAILURE
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

    case GET_PROJECTS_REQUEST:
      return {
        loading: true
      };

    case GET_PROJECTS_SUCCESS:
      return {
        projects: action.projects,
        loading: false
      };

    case CREATE_PROJECT_FAILURE:
      return { 
        errorGettingProjects: action.error
      };  

    default:
      return state
  }
}