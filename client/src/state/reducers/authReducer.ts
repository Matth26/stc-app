import produce from 'immer';
import { AuthActionType } from '../action-types';
import { AuthAction } from '../actions';

export interface AuthState {
  user: false | any | null;
}

const initialState: AuthState = {
  user: null,
};

const reducer = produce((state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionType.FETCH_USER:
      if (action.payload) state.user = action.payload;
      else state.user = false;
      return state;
    default:
      return state;
  }
}, initialState);

export default reducer;
