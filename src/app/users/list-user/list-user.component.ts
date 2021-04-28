import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserState } from './../../store/app.state';
import { UserModel } from './../../store/storeModels/user.model';
import * as UserActions from './../../store/actions/user.action';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users$: Observable<UserState>;
  UserSubscription: Subscription;
  UserList: UserModel[] = [];
  userError: Error = null;

  constructor(private store: Store<{ users: UserState }>) {
    this.users$ = store.pipe(select('users'));
  }

  ngOnInit() {
    this.UserSubscription = this.users$
      .pipe(
        map(x => {
          this.UserList = x.Users;
          this.userError = x.UserError;
        })
      )
      .subscribe();

    this.store.dispatch(UserActions.GetUsersAction());
  }

  ngOnDestroy() {
    if (this.UserSubscription) {
      this.UserSubscription.unsubscribe();
    }
  }

}
