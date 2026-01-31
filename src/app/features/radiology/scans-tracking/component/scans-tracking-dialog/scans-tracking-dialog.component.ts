import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllPatientsService } from '../../../../patients/all-patients/all-patients.service';

@Component({
  selector: 'app-scans-tracking-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './scans-tracking-dialog.component.html',
  styleUrl: './scans-tracking-dialog.component.scss'
})
export class ScansTrackingDialogComponent {
  ScansTrackingForm!: FormGroup;
  PatientList: any;

  constructor(public dialogRef: MatDialogRef<ScansTrackingDialogComponent>, private fb: NonNullableFormBuilder, private allPatientService: AllPatientsService,
    @Optional() @Inject(MAT_DIALOG_DATA) public ScansTrackingDetails: any) {
    this.ScansTrackingForm = this.fb.group({
      PatientName: this.fb.control('', Validators.required),
      ScanType: this.fb.control('', Validators.required),
      Modality: this.fb.control('', Validators.required),
      Technician: this.fb.control('', Validators.required),
      ScanDate: this.fb.control('', Validators.required),
      Status: this.fb.control('', Validators.required)
    })

    this.allPatientService.GetAllPatients().subscribe({
      next: (result: any) => {
        this.PatientList = result
      },
    })
  }
}
