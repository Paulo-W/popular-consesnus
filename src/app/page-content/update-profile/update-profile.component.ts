import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {Auth} from 'aws-amplify';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.sass']
})
export class UpdateProfileComponent implements OnInit {

  imageUrl = null;
  file: File;
  fileType: string;
  initializedForm;

  updatingUser: boolean;

  welcomeMessage = 'Update your popular consensus information';
  updateUserForm = new FormGroup({
    username: new FormControl('test', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required
    ])
  });

  constructor(
    private userService: UserService,
    private modalService: NgbModal
  ) {
  }

  ngOnInit(): void {
    this.getImage();
    this.getUserInformation();
  }

  getImage() {
    this.userService.getProfilePic(this.userService.currentUser.value).then(image => {
      this.imageUrl = image;
    });
  }

  onFileSelected(event) {
    if (event.target.files) {
      this.file = event.target.files[0];
      this.fileType = this.getFileType(event.target.files[0].name);

      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (ev) => {
        this.imageUrl = reader.result;
      };
    }
  }

  private getFileType(name: any): string {
    return name.substring(name.lastIndexOf('.') + 1);
  }

  private getUserInformation() {
    Auth.currentAuthenticatedUser().then(userEmail => {
      this.userService.getUsername().then(
        username => {
          this.setUsername(username);
          this.setEmail(userEmail.attributes.email);
          this.initializedForm = true;
        }
      );
    });
  }

  updateUserInfo() {
    this.updatingUser = true;
    this.userService.updateUser(this.username.value, this.file, this.fileType).then(() => {
      this.updatingUser = false;
    });
    Auth.currentAuthenticatedUser().then(user => {
      // Auth.updateUserAttributes(user, {email: this.email.value});
    });
  }

  get username() {
    return this.updateUserForm.get('username');
  }

  get email() {
    return this.updateUserForm.get('email');
  }

  setUsername(username: string) {
    this.updateUserForm.patchValue({username});
  }

  setEmail(email: string) {
    this.updateUserForm.patchValue({email});
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'xl'}).result.then();
  }


}
