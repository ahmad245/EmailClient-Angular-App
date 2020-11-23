import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatDialogModule
  ],
  exports:[
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
