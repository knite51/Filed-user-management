import { UserModel } from './storeModels/user.model';

export interface UserState {
  Users: Array<UserModel>;
  UserError: Error;
}

export const initializeState = (): UserState => {
  return { Users: Array<UserModel>(), UserError: null };
};