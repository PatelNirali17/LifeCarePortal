import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-patient-insurance-details-dialog',
  imports: [SharedModule, CommonModule],
  templateUrl: './patient-insurance-details-dialog.component.html',
  styleUrl: './patient-insurance-details-dialog.component.scss'
})
export class PatientInsuranceDetailsDialogComponent {

  constructor(public dialogRef: MatDialogRef<PatientInsuranceDetailsDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public PatientInsuranceDetails: any) {
  }
}
