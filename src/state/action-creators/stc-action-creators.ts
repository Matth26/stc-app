import { ActionStcType } from '../action-types';
import {
  AddStepAction,
  RemoveStepAction,
  UpdateStepAction,
  UpdateGoalAction,
  UpdateCurrentAction,
  ToggleEditModeAction,
} from '../actions';

export const addStep = (date: Date, text: string): AddStepAction => {
  return {
    type: ActionStcType.ADD_STEP,
    payload: { date: date, text: text },
  };
};

export const removeStep = (id: string): RemoveStepAction => {
  return {
    type: ActionStcType.REMOVE_STEP,
    payload: id,
  };
};

export const updateStep = (
  id: string,
  date: Date,
  text: string
): UpdateStepAction => {
  return {
    type: ActionStcType.UPDATE_STEP,
    payload: { id: id, date: date, text: text },
  };
};

export const updateGoal = (text: string): UpdateGoalAction => {
  return {
    type: ActionStcType.UPDATE_GOAL,
    payload: text,
  };
};

export const updateCurrent = (text: string): UpdateCurrentAction => {
  return {
    type: ActionStcType.UPDATE_CURRENT,
    payload: text,
  };
};

export const toggleEditMode = (): ToggleEditModeAction => {
  return {
    type: ActionStcType.TOGGLE_EDIT_MODE,
  };
};
