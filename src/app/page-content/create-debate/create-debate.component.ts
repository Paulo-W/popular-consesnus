import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DebateService} from '../../services/debate/debate.service';
import {Debate} from '../../interfaces/Debate';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {Channel} from '../../interfaces/Channel';
import {ChannelService} from '../../services/channel/channel.service';

@Component({
  selector: 'app-create-debate',
  templateUrl: './create-debate.component.html',
  styleUrls: ['./create-debate.component.sass']
})
export class CreateDebateComponent implements OnInit {

  channels: Channel[];

  createDebateForm = new FormGroup({
    title: new FormControl('', [
      Validators.required, Validators.minLength(10),
      Validators.maxLength(80)
    ]),
    description: new FormControl('', [
      Validators.required, Validators.minLength(40),
      Validators.maxLength(300)
    ]),
    team1: new FormGroup({
      name: new FormControl('', [
        Validators.required, Validators.minLength(3),
        Validators.maxLength(40)
      ])
    }),
    team2: new FormGroup({
      name: new FormControl('', [
        Validators.required, Validators.minLength(3),
        Validators.maxLength(40)
      ])
    }),
    tag: new FormControl('', [
      Validators.required
    ]),
    days: new FormControl(1, [
      Validators.required
    ]),
    channel: new FormControl('', [
      Validators.required
    ]),
    label: new FormControl('')
  });

  constructor(private debateService: DebateService,
              private location: Location,
              private channelService: ChannelService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getChannels();

  }

  getChannels() {
    this.channels = this.channelService.getChannel();
  }

  goBack() {
    this.location.back();
  }

  onSubmit() {

    this.debateService.saveDebate(this.createDebateForm.value as Debate).subscribe(
      saved => {
        if (saved) {
          this.router.navigate(['/home']);
        }
      }
    );
  }

  get title() {
    return this.createDebateForm.get('title');
  }

  get description() {
    return this.createDebateForm.get('description');
  }

  get team1Name() {
    return this.createDebateForm.get('team1.name');
  }

  get team2Name() {
    return this.createDebateForm.get('team2.name');
  }

  get label() {
    return this.createDebateForm.get('label');
  }

  get tag() {
    return this.createDebateForm.get('tag');
  }

  get days() {
    return this.createDebateForm.get('days');
  }

  get channel() {
    return this.createDebateForm.get('channel');
  }
}
