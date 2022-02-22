import { ActionType } from '../action-types';
import {
  AddStepAction,
  RemoveStepAction,
  UpdateStepAction,
  UpdateGoalAction,
  UpdateCurrentAction,
} from '../actions';

export const addStep = (date: Date, text: string): AddStepAction => {
  return {
    type: ActionType.ADD_STEP,
    payload: { date: date, text: text },
  };
};

export const removeStep = (id: string): RemoveStepAction => {
  return {
    type: ActionType.REMOVE_STEP,
    payload: id,
  };
};

export const updateStep = (
  id: string,
  date: Date,
  text: string
): UpdateStepAction => {
  return {
    type: ActionType.UPDATE_STEP,
    payload: { id: id, date: date, text: text },
  };
};

export const updateGoal = (text: string): UpdateGoalAction => {
  return {
    type: ActionType.UPDATE_GOAL,
    payload: text,
  };
};

export const updateCurrent = (text: string): UpdateCurrentAction => {
  return {
    type: ActionType.UPDATE_CURRENT,
    payload: text,
  };
};
