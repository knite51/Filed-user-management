import { createAction, props } from '@ngrx/store';
import { UserModel } from '../storeModels/user.model';

export const GetUsersAction = createAction('[Users] - Get Users');

export const CreateUserAction = createAction(
    '[User] - Create User',
    props<UserModel>()
);

export const ErrorUserAction = createAction('[User] - Error', props<Error>());



