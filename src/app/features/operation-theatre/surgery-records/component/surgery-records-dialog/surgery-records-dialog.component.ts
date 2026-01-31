import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllDoctorsService } from '../../../../doctors/all-doctors/all-doctors.service';
import { AllPatientsService } from '../../../../patients/all-patients/all-patients.service';

@Component({
  selector: 'app-surgery-records-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './surgery-records-dialog.component.html',
  styleUrl: './surgery-records-dialog.component.scss'
})
export class SurgeryRecordsDialogComponent {
  SurgeryRecordsForm!: FormGroup;
  PatientList: any;
  DoctorList: any;

  constructor(public dialogRef: MatDialogRef<SurgeryRecordsDialogComponent>, private fb: NonNullableFormBuilder, private allDoctorsService: AllDoctorsService,
    private allPatientService: AllPatientsService,
    @Optional() @Inject(MAT_DIALOG_DATA) public SurgeryRecordsDetails: any) {
    this.SurgeryRecordsForm = this.fb.group({
      PatientName: this.fb.control('', Validators.required),
      SurgeryType: this.fb.control('', Validators.required),
      Surgeon: this.fb.control('', Validators.required),
      Date: this.fb.control('', Validators.required),
      StartTime: this.fb.control('', Validators.required),
      EndTime: this.fb.control('', Validators.required),
      Outcome: this.fb.control('', Validators.required)
    })
    this.allDoctorsService.GetAllDoctors().subscribe({
      next: (result: any) => {
        this.DoctorList = result
      },
    })
    this.allPatientService.GetAllPatients().subscribe({
      next: (result: any) => {
        this.PatientList = result
      },
    })
  }
}
