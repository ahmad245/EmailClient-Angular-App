import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { DialogComponent } from './modals/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class MyDialogServiceService {
  constructor(public dialog: MatDialog) { }

  private conf = { autoFocus: true };

  private mediumConf = {height: 'auto', width: '70%', ...this.conf};

  public open<T>(component: ComponentType<T> | TemplateRef<T>, data: any) {
    this.mediumConf['data'] = { component, data };
    const conf = this.mediumConf;
    return this.dialog.open(DialogComponent, conf);
  }
  
 public error<T>(data: any) {
   // return this.dialog.open(AlertDialogComponent, {panelClass: 'alert-panel', data: data});
  }
}