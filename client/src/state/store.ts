import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import { ChartsActionType } from './action-types';

export const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

/*store.dispatch({
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
});*/

/*store.dispatch({
  type: ChartsActionType.SUBMIT_CHART,
  payload: { name: 'test', current: 'ddd', goal: 'dfff', steps: [] },
});*/

//console.log(store.getState);
