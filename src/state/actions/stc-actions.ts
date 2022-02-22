import { ActionStcType } from '../action-types';
import { Step } from '../types';

export interface AddStepAction {
  type: ActionStcType.ADD_STEP;
  payload: { date: Date; text: string };
}

export interface RemoveStepAction {
  type: ActionStcType.REMOVE_STEP;
  payload: string;
}

export interface UpdateStepAction {
  type: ActionStcType.UPDATE_STEP;
  payload: Step;
}

export interface UpdateGoalAction {
  type: ActionStcType.UPDATE_GOAL;
  payload: string;
}

export interface UpdateCurrentAction {
  type: ActionStcType.UPDATE_CURRENT;
  payload: string;
}

export interface ToggleEditModeAction {
  type: ActionStcType.TOGGLE_EDIT_MODE;
}

export type StcAction =
  | AddStepAction
  | RemoveStepAction
  | UpdateStepAction
  | UpdateGoalAction
  | UpdateCurrentAction
  | ToggleEditModeAction;
