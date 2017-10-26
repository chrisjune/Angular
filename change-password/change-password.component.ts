import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPass: ['',
                  Validators.required,
                  PasswordValidators.shouldBeUnique
                ],
      newPass: ['', Validators.required],
      confirmPass: ['', Validators.required]
    }, {validator: PasswordValidators.notMatchNewPassword});
  }

  get oldPass(){
    return this.form.get('oldPass');
  }
  get newPass(){
    return this.form.get('newPass');
  }
  get confirmPass(){
    return this.form.get('confirmPass');
  }
  log(x) {
    console.log(x);
  }
}
