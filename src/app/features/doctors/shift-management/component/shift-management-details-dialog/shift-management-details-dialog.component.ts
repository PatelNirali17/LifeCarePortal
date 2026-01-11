import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-shift-management-details-dialog',
  imports: [SharedModule,CommonModule],
  templateUrl: './shift-management-details-dialog.component.html',
  styleUrl: './shift-management-details-dialog.component.scss'
})
export class ShiftManagementDetailsDialogComponent {

   constructor(public dialogRef: MatDialogRef<ShiftManagementDetailsDialogComponent>, 
    @Optional() @Inject(MAT_DIALOG_DATA) public ShiftManagementDetails: any) {
  }
}
