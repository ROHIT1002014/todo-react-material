import { combineReducers } from 'redux';
import rootReducer from './reducers/rootReducer'

// Imports: Reducers
import authReducer from './reducers/authReducer';

// Redux: Root Reducer
const mainReducer = combineReducers({
  authReducer: authReducer,
  rootReducer: rootReducer,
});

// Exports
export default mainReducer;