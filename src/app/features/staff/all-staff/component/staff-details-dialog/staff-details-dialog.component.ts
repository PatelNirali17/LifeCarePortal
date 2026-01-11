import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-staff-details-dialog',
  imports: [SharedModule,CommonModule],
  templateUrl: './staff-details-dialog.component.html',
  styleUrl: './staff-details-dialog.component.scss'
})
export class StaffDetailsDialogComponent {

   constructor(public dialogRef: MatDialogRef<StaffDetailsDialogComponent>, 
    @Optional() @Inject(MAT_DIALOG_DATA) public StaffDetails: any) {
  }
}
