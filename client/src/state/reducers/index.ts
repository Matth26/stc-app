import { combineReducers } from 'redux';
import stcReducer from './stcReducer';
import authReducer from './authReducer';

const reducers = combineReducers({ stc: stcReducer, auth: authReducer });

export default reducers;

export type RootState = ReturnType<typeof reducers>;
