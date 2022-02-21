import { ActionType } from '../action-types';
import { Step } from '../step';

export interface AddStepAction {
  type: ActionType.ADD_STEP;
  payload: { date: Date; text: string };
}

export interface UpdateStepAction {
  type: ActionType.UPDATE_STEP;
  payload: Step;
}

export interface UpdateGoalAction {
  type: ActionType.UPDATE_GOAL;
  payload: string;
}

export interface UpdateCurrentAction {
  type: ActionType.UPDATE_CURRENT;
  payload: string;
}

export type Action =
  | AddStepAction
  | UpdateStepAction
  | UpdateGoalAction
  | UpdateCurrentAction;
