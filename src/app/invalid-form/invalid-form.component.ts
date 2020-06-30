import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl, ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-invalid-form',
  templateUrl: './invalid-form.component.html',
  styleUrls: ['./invalid-form.component.sass']
})
export class InvalidFormComponent implements OnInit {

  @Input() formControlInput: FormControl;
  @Input() name: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
