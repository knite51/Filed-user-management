import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {

  userFormValidator = inputObject => {
    const errors: any = {};
    if (!inputObject.email || !inputObject.firstName || !inputObject.lastName ||
      !inputObject.monthlyAdvertisingBudget || !inputObject.phone) {
      errors.email = !inputObject.email ? 'Email Required' : undefined;
      errors.firstName = !inputObject.firstName ? 'Firstname Required' : undefined;
      errors.lastName = !inputObject.lastName ? 'Lastname Required' : undefined;
      errors.monthlyAdvertisingBudget = !inputObject.monthlyAdvertisingBudget ? 'Monthly Advertising Budget Required' : undefined;
      errors.phone = !inputObject.phone ? 'Phone Number Required' : undefined;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputObject.email)
    ) {
      errors.email = 'Invalid email address';
    } else if (isNaN(Number(inputObject.monthlyAdvertisingBudget))) {
      errors.monthlyAdvertisingBudget = 'Monthly Ad Budget must be a number';
    } else if (isNaN(Number(inputObject.phone))) {
      errors.phone = 'Phone Number must be a number';
    }
    return errors;
  }
}
