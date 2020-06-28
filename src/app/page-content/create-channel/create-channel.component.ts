import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-create-channel',
  templateUrl: './create-channel.component.html',
  styleUrls: ['./create-channel.component.sass']
})
export class CreateChannelComponent implements OnInit {

  constructor(private location: Location) {
  }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }
}
