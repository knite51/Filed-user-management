import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { Store } from "@ngrx/store";
import { UserState } from "../store/app.state";
import * as UserActions from './../store/actions/user.action';


@Injectable({
  providedIn: "root"
})
export class PaymentService {

  private ApiURL: string = 'https://localhost:5300/';

  constructor(
    private http: HttpClient,
    private store: Store<{ users: UserState }>
  ) { }

  // Handle Errors
  private handleError = (error: any): Observable<any> => {
    let message = "";
    if (error) {
      if (error.error) {
        message = error.error.message;
      } else {
        message = error.message;
      }
    }
    console.log(message, " Payment Service Error Message");
    return of(null);
  };


  createUser(payload) {
    return this.store.dispatch(UserActions.CreateUserAction(payload));

    // Commented Code will make a post request to the a connected backend service, implemented with a error handler

    // try {
    //   return this.http.post(`${this.ApiURL}`, payload).pipe(catchError(this.handleError));
    // } catch (error) {
    //   alert(error);
    // }
  }
}
