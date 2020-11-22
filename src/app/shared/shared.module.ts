import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import { MaterialModule } from './../material/material/material.module';
import {RouterModule} from '@angular/router';





@NgModule({
  declarations: [InputComponent, HeaderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
  ],
  exports:[InputComponent,MaterialModule,HeaderComponent]
})
export class SharedModule { }
