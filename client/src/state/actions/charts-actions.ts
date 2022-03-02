import { ChartsActionType } from '../action-types';
import { Chart } from '../types';

export interface FetchChartsAction {
  type: ChartsActionType.FETCH_CHARTS;
  payload: Chart[];
}

export interface SubmitChartAction {
  type: ChartsActionType.SUBMIT_CHART;
  payload: Chart;
}

export interface UpdateChartAction {
  type: ChartsActionType.UPDATE_CHART;
}

export type ChartsAction =
  | FetchChartsAction
  | SubmitChartAction
  | UpdateChartAction;
