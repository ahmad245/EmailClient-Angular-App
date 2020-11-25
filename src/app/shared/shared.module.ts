import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import { MaterialModule } from './../material/material/material.module';
import {RouterModule} from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import { DialogComponent } from './modals/dialog/dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogContainerComponent } from './modals/dialog-container/dialog-container.component';





@NgModule({
  declarations: [InputComponent, HeaderComponent, DialogComponent, DialogContainerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports:[InputComponent,MaterialModule,HeaderComponent,FlexLayoutModule,DialogComponent,DialogContainerComponent],
  providers:[
    { provide: MatDialogRef, useValue: {} },
	{ provide: MAT_DIALOG_DATA, useValue: [] }
  ]
})
export class SharedModule { }
