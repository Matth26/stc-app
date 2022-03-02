import { combineReducers } from 'redux';
import stcReducer from './stcReducer';
import authReducer from './authReducer';
import chartsReducer from './chartsReducer';

const reducers = combineReducers({
  stc: stcReducer,
  auth: authReducer,
  charts: chartsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
