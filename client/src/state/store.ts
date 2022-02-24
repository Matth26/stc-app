import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { StcActionType } from './action-types';

export const store = createStore(reducers, {}, applyMiddleware());

store.dispatch({
  type: StcActionType.ADD_STEP,
  payload: { date: new Date(), text: '11111111' },
});

store.dispatch({
  type: StcActionType.ADD_STEP,
  payload: { date: new Date(), text: '222222222222' },
});

store.dispatch({
  type: StcActionType.ADD_STEP,
  payload: {
    date: new Date(),
    text: '333333333333333333333333333333333333333333333333333333',
  },
});

store.dispatch({
  type: StcActionType.ADD_CHART,
  payload: 'ouioui',
});

store.dispatch({
  type: StcActionType.ADD_CHART,
  payload: 'nonnon',
});

//console.log(store.getState);
