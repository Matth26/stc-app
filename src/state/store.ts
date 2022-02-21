import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { ActionType } from './action-types';

export const store = createStore(reducers, {}, applyMiddleware());

store.dispatch({
  type: ActionType.ADD_STEP,
  payload: { date: new Date(), text: 'blabl' },
});

store.dispatch({
  type: ActionType.ADD_STEP,
  payload: { date: new Date(), text: 'blabl' },
});

store.dispatch({
  type: ActionType.ADD_STEP,
  payload: { date: new Date(), text: 'blabl' },
});

//console.log(store.getState);
