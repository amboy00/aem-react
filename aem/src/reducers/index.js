import { combineReducers } from 'redux';
import HomeReducer from './ReducerHome';

const rootReducer = combineReducers({
  home: HomeReducer,
});

export default rootReducer;
