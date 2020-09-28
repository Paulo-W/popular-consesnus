import {Component, OnInit} from '@angular/core';
import {Hub} from 'aws-amplify';
import {FormFieldTypes} from '@aws-amplify/ui-components';
import {Router} from '@angular/router';
import {UserService} from '../services/user/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {
  formFields: FormFieldTypes;

  constructor(private router: Router, private userService: UserService) {

    Hub.listen('auth', (data) => {
      if (data.payload.event === 'signIn') {
        userService.setCurrentUser();
        this.router.navigate(['/home']).then();
      } else if (data.payload.event === 'signOut') {
        userService.removeUserToken();
      }
    });

    this.formFields = [
      {
        type: 'username',
        label: 'Username',
        placeholder: 'Please enter a nickname',
        required: true
      },
      {
        type: 'email',
        label: 'email',
        placeholder: 'Please enter your email',
        required: true,
      },
      {
        type: 'password',
        label: 'password',
        placeholder: '*************',
        required: true,
      }
    ];
  }

  ngOnInit() {
  }
}
