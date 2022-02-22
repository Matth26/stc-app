import { ActionChartsType } from '../action-types';
import {
  AddChartAction,
  RemoveChartAction,
  SelectChartAction,
} from '../actions/charts-actions';

export const addChart = (name: string): AddChartAction => {
  return {
    type: ActionChartsType.ADD_CHART,
    payload: name,
  };
};

export const removeChart = (id: string): RemoveChartAction => {
  return {
    type: ActionChartsType.REMOVE_CHART,
    payload: id,
  };
};

export const selectChart = (id: string): SelectChartAction => {
  return {
    type: ActionChartsType.SELECT_CHART,
    payload: id,
  };
};
