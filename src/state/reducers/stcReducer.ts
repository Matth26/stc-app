import produce from 'immer';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Step } from '../step';

const randomID = () => Math.random().toString(36).substring(2, 5);

interface StcState {
  id: string;
  current: string;
  goal: string;
  steps: Step[];
}

const initialState: StcState = {
  id: randomID(),
  current: 'a',
  goal: 'a',
  steps: [],
};

const reducer = produce((state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_STEP:
      const { date, text } = action.payload;
      state.steps.push({ id: randomID(), date, text });
      return state;
    case ActionType.UPDATE_CURRENT:
      state.current = action.payload;
      return state;
    case ActionType.UPDATE_GOAL:
      state.goal = action.payload;
      return state;
    case ActionType.UPDATE_STEP:
      let i = state.steps.findIndex((e: Step) => e.id === action.payload.id);
      if (i < 0) return state;

      state.steps[i] = {
        id: state.steps[i].id,
        date: action.payload.date,
        text: action.payload.text,
      };
      return state;
    default:
      return state;
  }
});

export default reducer;
