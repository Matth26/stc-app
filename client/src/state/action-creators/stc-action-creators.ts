import axios from 'axios';
import { Dispatch } from 'react';
import { StcAction } from '../actions';

import { StcActionType } from '../action-types';
import {
  AddStepAction,
  RemoveStepAction,
  UpdateStepAction,
  UpdateGoalAction,
  UpdateCurrentAction,
  ToggleEditModeAction,
  //AddChartAction,
  RemoveChartAction,
  SelectChartAction,
} from '../actions';

export const addStep = (date: Date, text: string): AddStepAction => {
  return {
    type: StcActionType.ADD_STEP,
    payload: { date: date, text: text },
  };
};

export const removeStep = (id: string): RemoveStepAction => {
  return {
    type: StcActionType.REMOVE_STEP,
    payload: id,
  };
};

export const updateStep = (
  id: string,
  date: Date,
  text: string
): UpdateStepAction => {
  return {
    type: StcActionType.UPDATE_STEP,
    payload: { id: id, date: date, text: text },
  };
};

export const updateGoal = (text: string): UpdateGoalAction => {
  return {
    type: StcActionType.UPDATE_GOAL,
    payload: text,
  };
};

export const updateCurrent = (text: string): UpdateCurrentAction => {
  return {
    type: StcActionType.UPDATE_CURRENT,
    payload: text,
  };
};

export const toggleEditMode = (): ToggleEditModeAction => {
  return {
    type: StcActionType.TOGGLE_EDIT_MODE,
  };
};

/*export const addChart = (name: string): AddChartAction => {
  return {
    type: StcActionType.ADD_CHART,
    payload: name,
  };
};*/

export const addChart =
  (name: string) => async (dispatch: Dispatch<StcAction>) => {
    const res = await axios.post('/api/charts', { name: name });
    console.log(res);
    dispatch({
      type: StcActionType.ADD_CHART,
      payload: name,
    });
  };

export const removeChart = (id: string): RemoveChartAction => {
  return {
    type: StcActionType.REMOVE_CHART,
    payload: id,
  };
};

export const selectChart = (id: string): SelectChartAction => {
  return {
    type: StcActionType.SELECT_CHART,
    payload: id,
  };
};
