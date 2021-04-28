import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {

  constructor(private toastr: ToastrService) { }

  toastAlertSuccess(message, title) {
    this.toastr.success(message, title, {
      timeOut: 3000,
    });
  }

  toastAlertErr(message, title) {
    this.toastr.error(message, title, {
      timeOut: 3000,
    });
  }

}
