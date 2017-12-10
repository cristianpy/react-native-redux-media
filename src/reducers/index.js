import { combineReducers } from 'redux';

import { authentication } from './authentication';
import { registration } from './register';
import { user } from './user';
import { project } from './project';

const rootReducer = combineReducers({
  authentication,
  registration,
  user,
  project
});

export default rootReducer;