import produce from 'immer';
import { ChartsActionType } from '../action-types';
import { ChartsAction } from '../actions';
import { Chart } from '../types';

const initialState: Chart[] = [];

const reducer = produce((state: Chart[], action: ChartsAction) => {
  console.log(action);
  switch (action.type) {
    case ChartsActionType.FETCH_CHARTS:
      state = action.payload;
      return state;

    default:
      return state;
  }
}, initialState);

export default reducer;
