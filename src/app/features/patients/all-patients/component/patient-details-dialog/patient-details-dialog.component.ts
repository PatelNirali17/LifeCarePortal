import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-patient-details-dialog',
  imports: [SharedModule,CommonModule],
  templateUrl: './patient-details-dialog.component.html',
  styleUrl: './patient-details-dialog.component.scss'
})
export class PatientDetailsDialogComponent {

   constructor(public dialogRef: MatDialogRef<PatientDetailsDialogComponent>, 
    @Optional() @Inject(MAT_DIALOG_DATA) public PatientDetails: any) {
  }
}
