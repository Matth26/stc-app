import axios from 'axios';
import { Dispatch } from 'react';
import { ObjectId } from 'mongoose';

import { ChartsActionType } from '../action-types';
import { FetchChartsAction } from '../actions';
import { Step } from '../types';

export const submitChart =
  (name: string, current: string, goal: string, steps: Step[]) =>
  async (dispatch: Dispatch<FetchChartsAction>) => {
    console.log('submitChart');
    const res = await axios.post('/api/charts', { name, current, goal, steps });
    console.log(res);
    dispatch({
      type: ChartsActionType.FETCH_CHARTS,
      payload: res.data,
    });
    console.log('after dispatch');
  };

export const fetchCharts =
  () => async (dispatch: Dispatch<FetchChartsAction>) => {
    const res = await axios.get('/api/charts');
    console.log('fetchCharts');
    console.log(res);
    dispatch({
      type: ChartsActionType.FETCH_CHARTS,
      payload: res.data,
    });
  };

export const deleteChart =
  (_id: ObjectId) => async (dispatch: Dispatch<FetchChartsAction>) => {
    const res = await axios.delete(`/api/charts/${_id}`);
    console.log('fetchCharts');
    console.log(res);
    dispatch({
      type: ChartsActionType.FETCH_CHARTS,
      payload: res.data,
    });
  };
