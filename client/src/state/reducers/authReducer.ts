import produce from 'immer';
import { AuthActionType } from '../action-types';
import { AuthAction } from '../actions';

export type AuthState = false | any | null;

const initialState: AuthState = null;

const reducer = produce((state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionType.FETCH_USER:
      console.log(action);
      if (action.payload) return action.payload;
      else return false;
    default:
      return state;
  }
}, initialState);

export default reducer;
