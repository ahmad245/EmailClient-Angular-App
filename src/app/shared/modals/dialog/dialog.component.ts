import { ComponentPortal } from '@angular/cdk/portal';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  portal: ComponentPortal<any>;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Optional()  @Inject(MAT_DIALOG_DATA) public data: any
  ) {
   
    
  }
  ngOnInit(): void {
    this.portal = new ComponentPortal(this.data.component);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
