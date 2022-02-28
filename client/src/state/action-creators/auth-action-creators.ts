import axios from 'axios';
import { Dispatch } from 'react';
import { AuthActionType } from '../action-types';
import { AuthAction } from '../actions';

export const fetchUser = () => async (dispatch: Dispatch<AuthAction>) => {
  const res = await axios.get('/api/current_user');
  console.log(res);
  dispatch({
    type: AuthActionType.FETCH_USER,
    payload: res.data,
  });
};
