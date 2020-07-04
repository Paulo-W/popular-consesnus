import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-invalid-form',
  templateUrl: './invalid-form.component.html',
  styleUrls: ['./invalid-form.component.sass']
})
export class InvalidFormComponent implements OnInit {

  @Input() formControlInput: AbstractControl;
  @Input() name: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
