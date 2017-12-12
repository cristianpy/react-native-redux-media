import { projectService } from '../services';

import { 
    CREATE_PROJECT_REQUEST, 
    CREATE_PROJECT_SUCCESS, 
    CREATE_PROJECT_FAILURE, 

    GET_PROJECTS_REQUEST,
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_FAILURE
} from '../constants';

export const create = (token, name, description, images, navigate) => {
    console.log('CREATE ACTION');
    const request = ()  => { return { type: CREATE_PROJECT_REQUEST } }
    const success = ()  => { return { type: CREATE_PROJECT_SUCCESS } }
    const failure = (error) => { return { type: CREATE_PROJECT_FAILURE, error } }
    return async dispatch => {
        try {
            dispatch(request());
            response = await projectService.create(token, name, description, images);
            responseJson = await response.json();
            dispatch(success());
            navigate('Workspace');
        } catch (error) {
            dispatch(failure('Error creating project', error));
        }
    };

}

export const getProjects = (token) => {
    const request = ()  => { return { type: GET_PROJECTS_REQUEST } }
    const success = (projects)  => { return { type: GET_PROJECTS_SUCCESS, projects } }
    const failure = (error) => { return { type: GET_PROJECTS_FAILURE, error } }
    return async dispatch => {
        try {
            dispatch(request());
            let response = await projectService.getProjects(token);
            let responseJson = await response.json();
            let projects = responseJson.projects;
            dispatch(success(projects));
        } catch (error) {
            dispatch(failure('Error getting project', error));
        }
    };

}