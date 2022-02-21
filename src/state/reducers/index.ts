import { combineReducers } from 'redux';
import stcReducer from './stcReducer';

const reducers = combineReducers({ stc: stcReducer });

export default reducers;

export type RootState = ReturnType<typeof reducers>;
