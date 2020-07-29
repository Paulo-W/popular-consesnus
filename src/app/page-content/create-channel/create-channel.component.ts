import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ChannelService} from '../../services/channel/channel.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-channel',
  templateUrl: './create-channel.component.html',
  styleUrls: ['./create-channel.component.sass']
})
export class CreateChannelComponent implements OnInit {

  clicked = false;

  createChannelForm = new FormGroup({
    title: new FormControl('', [
      Validators.required, Validators.minLength(5),
      Validators.maxLength(80)
    ]),
    description: new FormControl('', [
      Validators.required, Validators.minLength(10),
      Validators.maxLength(300)
    ])
  });

  constructor(
    private location: Location,
    private channelService: ChannelService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }

  onSubmit() {
    // do something here
    this.clicked = true;
    this.channelService.createChannel(this.createChannelForm.value).then(
      value => {
        this.clicked = false;
        this.router.navigate(['/home']);
        this.channelService.joinChannel(value.id);
      }
    );
  }

  get title() {
    return this.createChannelForm.get('title');
  }

  get description() {
    return this.createChannelForm.get('description');
  }
}
