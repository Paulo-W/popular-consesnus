import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Channel} from '../../../interfaces/Channel';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.sass']
})
export class ChannelListComponent implements OnInit {

  @Input() list: Channel[];
  @Input() userId: number;

  @Output() leaveEvent = new EventEmitter<Channel>();
  @Output() joinEvent = new EventEmitter<Channel>();

  constructor() {
  }

  leaveChannel(channel: Channel): void {
    this.leaveEvent.next(channel);
  }

  joinChannel(channel: Channel): void {
    this.joinEvent.next(channel);
  }

  ngOnInit(): void {
  }

  getMembers(channel: Channel): number {
    return channel.members.length;
  }

  isMember(channel: Channel): boolean {
    return channel.members.includes(this.userId);
  }

}
