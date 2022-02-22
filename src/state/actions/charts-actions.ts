import { ActionChartsType } from '../action-types';

export interface AddChartAction {
  type: ActionChartsType.ADD_CHART;
  payload: string;
}

export interface RemoveChartAction {
  type: ActionChartsType.REMOVE_CHART;
  payload: string;
}

export interface SelectChartAction {
  type: ActionChartsType.SELECT_CHART;
  payload: string;
}

export type ChartsAction =
  | AddChartAction
  | RemoveChartAction
  | SelectChartAction;
