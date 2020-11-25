import { Component, OnInit, Input } from '@angular/core';
import { FieldConfig } from '../models';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() field: FieldConfig;
  @Input() control :FormControl;
  @Input() id ;
  @Input() name ;
  @Input() value='' ;
  @Input() class='' ;
  @Input() placeholder='' ;
  @Input() inputType='text';
  @Input() label;
  @Input() controlType='text';
  @Input() height= '100px';
  constructor() { }

  ngOnInit(): void {
  }
  checkRequired(){
    return  this.control.invalid

  }
}
