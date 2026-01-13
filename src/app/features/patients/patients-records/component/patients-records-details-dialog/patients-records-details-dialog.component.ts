import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-patients-records-details-dialog',
  imports: [SharedModule, CommonModule],
  templateUrl: './patients-records-details-dialog.component.html',
  styleUrl: './patients-records-details-dialog.component.scss'
})
export class PatientsRecordsDetailsDialogComponent {

  constructor(public dialogRef: MatDialogRef<PatientsRecordsDetailsDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public PatientRecordsDetails: any) {
  }
}
