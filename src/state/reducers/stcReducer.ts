import produce from 'immer';
import { ActionStcType } from '../action-types';
import { StcAction } from '../actions';
import { Step, Stc as StcState } from '../types';

const randomID = () => Math.random().toString(36).substring(2, 5);

const initialState: StcState = {
  id: '',
  name: '',
  mode: 'read',
  current: '',
  goal: '',
  steps: [],
};

const reducer = produce((state = initialState, action: StcAction) => {
  switch (action.type) {
    case ActionStcType.ADD_STEP:
      const { date, text } = action.payload;
      state.steps.push({ id: randomID(), date, text });
      return state;
    case ActionStcType.REMOVE_STEP:
      let indexToRemove = state.steps.findIndex(
        (e: Step) => e.id === action.payload
      );
      if (indexToRemove !== -1) state.steps.splice(indexToRemove, 1);
      return state;
    case ActionStcType.UPDATE_CURRENT:
      state.current = action.payload;
      return state;
    case ActionStcType.UPDATE_GOAL:
      state.goal = action.payload;
      return state;
    case ActionStcType.UPDATE_STEP:
      let i = state.steps.findIndex((e: Step) => e.id === action.payload.id);
      if (i < 0) return state;

      state.steps[i] = {
        id: state.steps[i].id,
        date: action.payload.date,
        text: action.payload.text,
      };
      return state;
    case ActionStcType.TOGGLE_EDIT_MODE:
      if (state.mode === 'edit') state.mode = 'read';
      else state.mode = 'edit';
      return state;
    default:
      return state;
  }
});

export default reducer;
