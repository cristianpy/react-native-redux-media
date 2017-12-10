import { projectService } from '../services';

import { 
    CREATE_PROJECT_REQUEST, 
    CREATE_PROJECT_SUCCESS, 
    CREATE_PROJECT_FAILURE, 
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
            console.log('response create project', responseJson);
            dispatch(success());
            navigate('Workspace');
        } catch (error) {
            alert(error)
            dispatch(failure('Error creating project', error));
        }
    };

}