import { combineReducers } from 'redux';

import { authentication } from './authentication';
import { registration } from './register';
import { user } from './user';

const rootReducer = combineReducers({
  authentication,
  registration,
  user
});

export default rootReducer;