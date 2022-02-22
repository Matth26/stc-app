import { combineReducers } from 'redux';
import stcReducer from './stcReducer';
import chartsReducer from './chartsReducer';

const reducers = combineReducers({ stc: stcReducer, charts: chartsReducer });

export default reducers;

export type RootState = ReturnType<typeof reducers>;
