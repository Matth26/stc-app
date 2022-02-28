import { AuthActionType } from '../action-types';

export interface FetchUserAction {
  type: AuthActionType.FETCH_USER;
  payload: any;
}

export type AuthAction = FetchUserAction;
