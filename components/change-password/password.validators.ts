import { AbstractControl, ValidationErrors } from '@angular/forms';
export class PasswordValidators {
  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      if (control.value !== '1234') {
        resolve({shouldBeUnique: true});
      }else {
        resolve(null);
      }
    });
  }


  static notMatchNewPassword(control: AbstractControl): ValidationErrors | null {
    let np = control.get('newPass').value;
    let cp = control.get('confirmPass').value;
    if (np === cp) {
      return null;
    }else {
      return {notMatchNewPassword: true} ;
    }
  }
}
