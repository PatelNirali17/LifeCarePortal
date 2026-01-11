import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-appointment-details-dialog',
  imports: [SharedModule,CommonModule],
  templateUrl: './appointment-details-dialog.component.html',
  styleUrl: './appointment-details-dialog.component.scss'
})
export class AppointmentDetailsDialogComponent {

  constructor(public dialogRef: MatDialogRef<AppointmentDetailsDialogComponent>, 
    @Optional() @Inject(MAT_DIALOG_DATA) public AppointmentDetails: any) {
  }
}
