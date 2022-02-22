import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { ActionStcType, ActionChartsType } from './action-types';

export const store = createStore(reducers, {}, applyMiddleware());

store.dispatch({
  type: ActionStcType.ADD_STEP,
  payload: { date: new Date(), text: '11111111' },
});

store.dispatch({
  type: ActionStcType.ADD_STEP,
  payload: { date: new Date(), text: '222222222222' },
});

store.dispatch({
  type: ActionStcType.ADD_STEP,
  payload: {
    date: new Date(),
    text: '333333333333333333333333333333333333333333333333333333',
  },
});

store.dispatch({
  type: ActionChartsType.ADD_CHART,
  payload: 'ouioui',
});

store.dispatch({
  type: ActionChartsType.ADD_CHART,
  payload: 'nonnon',
});

//console.log(store.getState);
