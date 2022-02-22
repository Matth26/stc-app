import produce from 'immer';
import { ActionChartsType } from '../action-types';
import { ChartsAction } from '../actions';
import { Stc } from '../types';

const randomID = () => Math.random().toString(36).substring(2, 5);

export interface ChartsState {
  selectedChart: string | undefined;
  charts: Stc[];
}

const initialState: ChartsState = {
  selectedChart: undefined,
  charts: [],
};

const reducer = produce((state = initialState, action: ChartsAction) => {
  switch (action.type) {
    case ActionChartsType.ADD_CHART:
      let id = randomID();
      state.charts.push({
        id,
        name: action.payload,
        mode: 'read',
        current: '',
        goal: '',
        steps: [],
      });
      state.selectChart = id;
      return state;
    case ActionChartsType.REMOVE_CHART:
      let indexToRemove = state.charts.findIndex(
        (e: Stc) => e.id === action.payload
      );
      if (indexToRemove !== -1) state.charts.splice(indexToRemove, 1);
      return state;
    case ActionChartsType.SELECT_CHART:
      state.selectChart = action.payload;
      return state;
    default:
      return state;
  }
});

export default reducer;
