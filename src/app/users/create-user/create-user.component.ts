import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { PaymentService } from 'src/app/services/payment.service';
import { ValidationService } from 'src/app/services/validation.service';
import { UserModel } from 'src/app/store/storeModels/user.model';
import * as $ from 'jquery';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  viewFormTwo = false;
  errMsg;

  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    monthlyAdvertisingBudget: new FormControl('', Validators.required),
    phone: new FormControl('+40', Validators.required),
  });

  constructor(private genServ: GeneralService, private paymentServ: PaymentService,
    private router: Router, private validation: ValidationService) { }

  ngOnInit() { }

  validateForm() {
    this.errMsg = this.validation.userFormValidator(this.userForm.value);
  }

  handleCreateUser() {
    this.validateForm();
    if ($.isEmptyObject(this.errMsg)) {
      const user: UserModel = this.userForm.value;
      this.paymentServ.createUser(user);
      this.genServ.toastAlertSuccess('User', 'User Created Successfully');
      this.router.navigate(['/']);
    }
  }


}
