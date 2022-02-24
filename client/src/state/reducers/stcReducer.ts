import produce from 'immer';
import { StcActionType } from '../action-types';
import { StcAction } from '../actions';
import { Step, StcState } from '../types';

const randomID = () => Math.random().toString(36).substring(2, 5);

const initialState: StcState = {
  selectedId: undefined,
  mode: 'read',
  charts: {},
};

const reducer = produce((state: StcState, action: StcAction) => {
  switch (action.type) {
    case StcActionType.ADD_STEP:
      const { date, text } = action.payload;
      if (state.selectedId)
        state.charts[state.selectedId].steps.push({
          id: randomID(),
          date,
          text,
        });
      return state;

    case StcActionType.REMOVE_STEP:
      if (state.selectedId) {
        let indexStepToRemove = state.charts[state.selectedId].steps.findIndex(
          (e: Step) => e.id === action.payload
        );
        if (indexStepToRemove !== -1)
          state.charts[state.selectedId].steps.splice(indexStepToRemove, 1);
      }

      return state;
    case StcActionType.UPDATE_CURRENT:
      if (state.selectedId) {
        state.charts[state.selectedId].current = action.payload;
      }
      return state;

    case StcActionType.UPDATE_GOAL:
      if (state.selectedId) {
        state.charts[state.selectedId].goal = action.payload;
      }
      return state;

    case StcActionType.UPDATE_STEP:
      if (state.selectedId) {
        let i = state.charts[state.selectedId].steps.findIndex(
          (e: Step) => e.id === action.payload.id
        );
        if (i < 0) return state;

        state.charts[state.selectedId].steps[i] = {
          id: state.charts[i].id,
          date: action.payload.date,
          text: action.payload.text,
        };
      }
      return state;

    case StcActionType.TOGGLE_EDIT_MODE:
      if (state.mode === 'edit') state.mode = 'read';
      else state.mode = 'edit';
      return state;

    case StcActionType.ADD_CHART:
      let id = randomID();
      state.charts[id] = {
        id,
        name: action.payload,
        current: '',
        goal: '',
        steps: [],
      };
      state.selectedId = id;
      return state;

    case StcActionType.REMOVE_CHART:
      delete state.charts[action.payload];
      return state;

    case StcActionType.SELECT_CHART:
      state.selectedId = action.payload;
      return state;

    default:
      return state;
  }
}, initialState);

export default reducer;
