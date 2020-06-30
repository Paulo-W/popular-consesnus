import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ChannelService} from '../../services/channel/channel.service';
import {Channel} from '../../interfaces/Channel';
import {User} from '../../interfaces/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-channel',
  templateUrl: './create-channel.component.html',
  styleUrls: ['./create-channel.component.sass']
})
export class CreateChannelComponent implements OnInit {

  newChannel = new ChannelForm(null, null, null);

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
    this.channelService.createChannel(this.newChannel as Channel).subscribe(
      submitted => {
        if (submitted) {
          this.router.navigate(['/channels']);
        }
      }
    );
  }
}

class ChannelForm implements Channel {

  constructor(
    public name: string,
    public description: string,
    public labels: string
  ) {
  }

  createdBy: User;
  members: number[];
  isMember: boolean;
}
