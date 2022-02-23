import { StcActionType } from '../action-types';
import { Step } from '../types';

export interface AddStepAction {
  type: StcActionType.ADD_STEP;
  payload: { date: Date; text: string };
}

export interface RemoveStepAction {
  type: StcActionType.REMOVE_STEP;
  payload: string;
}

export interface UpdateStepAction {
  type: StcActionType.UPDATE_STEP;
  payload: Step;
}

export interface UpdateGoalAction {
  type: StcActionType.UPDATE_GOAL;
  payload: string;
}

export interface UpdateCurrentAction {
  type: StcActionType.UPDATE_CURRENT;
  payload: string;
}

export interface ToggleEditModeAction {
  type: StcActionType.TOGGLE_EDIT_MODE;
}

export interface AddChartAction {
  type: StcActionType.ADD_CHART;
  payload: string;
}

export interface RemoveChartAction {
  type: StcActionType.REMOVE_CHART;
  payload: string;
}

export interface SelectChartAction {
  type: StcActionType.SELECT_CHART;
  payload: string;
}

export type StcAction =
  | AddStepAction
  | RemoveStepAction
  | UpdateStepAction
  | UpdateGoalAction
  | UpdateCurrentAction
  | ToggleEditModeAction
  | AddChartAction
  | RemoveChartAction
  | SelectChartAction;
