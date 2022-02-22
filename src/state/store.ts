import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { ActionType } from './action-types';

export const store = createStore(reducers, {}, applyMiddleware());

store.dispatch({
  type: ActionType.ADD_STEP,
  payload: { date: new Date(), text: '11111111' },
});

store.dispatch({
  type: ActionType.ADD_STEP,
  payload: { date: new Date(), text: '222222222222' },
});

store.dispatch({
  type: ActionType.ADD_STEP,
  payload: {
    date: new Date(),
    text: '333333333333333333333333333333333333333333333333333333',
  },
});

//console.log(store.getState);
