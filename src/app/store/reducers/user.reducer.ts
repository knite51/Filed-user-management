import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.action';
import { UserModel } from '../storeModels/user.model';
import { UserState, initializeState } from '../app.state';

export const intialState = initializeState();

const reducer = createReducer(
    intialState,
    on(UserActions.GetUsersAction, state => state),
    on(UserActions.CreateUserAction, (state: UserState, User: UserModel) => {
        return { ...state, Users: [...state.Users, User], UserError: null };
    }),
    on(UserActions.ErrorUserAction, (state: UserState, error: Error) => {
        console.log(error);
        return { ...state, UserError: error };
    })
);

export function UserReducer(state: UserState | undefined, action: Action) {
    return reducer(state, action);
}
