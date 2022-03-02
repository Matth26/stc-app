export enum StcActionType {
  ADD_STEP = 'add_step',
  REMOVE_STEP = 'remove_step',
  UPDATE_STEP = 'update_step',
  UPDATE_GOAL = 'update_goal',
  UPDATE_CURRENT = 'update_current',
  TOGGLE_EDIT_MODE = 'toggle_edit_mode',
  ADD_CHART = 'add_chart',
  REMOVE_CHART = 'remove_chart',
  SELECT_CHART = 'select_chart',
}

export enum AuthActionType {
  FETCH_USER = 'fetch_user',
}

export enum ChartsActionType {
  FETCH_CHARTS = 'fetch_charts',
  SUBMIT_CHART = 'submit_chart',
  UPDATE_CHART = 'update-chart',
}
