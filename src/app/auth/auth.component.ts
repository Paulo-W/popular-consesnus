import {Component, OnInit} from '@angular/core';
import {Auth} from 'aws-amplify';
import {FormFieldTypes} from '@aws-amplify/ui-components';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {
  formFields: FormFieldTypes;

  constructor() {
    this.formFields = [
      {
        type: 'text',
        label: 'Username',
        placeholder: 'Please enter your email',
        required: true,
      },
      {
        type: 'text',
        label: 'Full name',
        placeholder: 'Please enter your full name',
        required: true,
      },
      {
        type: 'email',
        label: 'Email',
        placeholder: 'Please enter your email',
        required: true,
      },
      {
        type: 'password',
        label: 'Password',
        placeholder: '*************',
        required: true,
      }
    ];
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    Auth.currentAuthenticatedUser().then(
      user => {
        console.log(user);
      }
    );
  }
}
