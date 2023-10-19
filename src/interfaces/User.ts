import { ReactNode } from 'react';
import { UserActions } from '../constants';

export interface IUserContext {
  userState: IUserState;
  dispatchUser: React.Dispatch<UserActionType>;
}

export interface IUserState {
  isAuthenticated: boolean;
  username: string | null;
  email: string | null;
  token: string | null;
}

export type UserActionType =
  | { type: UserActions.LOGIN_SUCCESS; payload: { username: string, email: string, token: string }}
  | { type: UserActions.LOGOUT }

export interface IUserContextProvider {
  children: ReactNode;
}
