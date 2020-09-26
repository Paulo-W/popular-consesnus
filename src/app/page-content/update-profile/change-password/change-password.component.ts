import {Component, Input, OnInit} from '@angular/core';
import {Auth} from 'aws-amplify';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.sass']
})
export class ChangePasswordComponent implements OnInit {

  @Input() modal;

  updatePasswordForm = new FormGroup({
    oldPassword: new FormControl('', [
      Validators.required
    ]),
    newPassword: new FormControl('', [
      Validators.required
    ]),
    confirmPassword: new FormControl('', [
      Validators.required
    ])
  });

  seePasswordArray = [
    false, false, false
  ];
  setPasswordError: string = null;

  constructor() {
  }

  ngOnInit(): void {
  }

  seePassword(index: number): string {
    return !(this.seePasswordArray[index]) ? 'password' : 'text';
  }

  updatePassword() {
    if (this.newPassword.value !== this.confirmPassword.value) {
      this.setPasswordError = 'The new passwords do not match';
    } else {
      Auth.currentAuthenticatedUser().then(user => {
        Auth.changePassword(user, this.oldPassword.value, this.newPassword.value).then(val => {
          console.log(val);
        }).catch(err => {
          console.log(err);
          this.setPasswordError = err.message;
        });
      });
    }

  }

  closeError() {
    this.setPasswordError = null;
  }

  get oldPassword() {
    return this.updatePasswordForm.get('oldPassword');
  }

  get newPassword() {
    return this.updatePasswordForm.get('newPassword');
  }

  get confirmPassword() {
    return this.updatePasswordForm.get('confirmPassword');
  }

}
