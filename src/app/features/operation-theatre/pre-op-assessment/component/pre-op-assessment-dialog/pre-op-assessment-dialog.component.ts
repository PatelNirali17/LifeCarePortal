import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllDoctorsService } from '../../../../doctors/all-doctors/all-doctors.service';
import { AllPatientsService } from '../../../../patients/all-patients/all-patients.service';

@Component({
  selector: 'app-pre-op-assessment-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './pre-op-assessment-dialog.component.html',
  styleUrl: './pre-op-assessment-dialog.component.scss'
})
export class PreOpAssessmentDialogComponent {
  PreOpAssessmentForm!: FormGroup;
  PatientList: any;
  DoctorList: any;

  constructor(public dialogRef: MatDialogRef<PreOpAssessmentDialogComponent>, private fb: NonNullableFormBuilder, private allDoctorsService: AllDoctorsService,
    private allPatientService: AllPatientsService,
    @Optional() @Inject(MAT_DIALOG_DATA) public PreOpAssessmentDetails: any) {
    this.PreOpAssessmentForm = this.fb.group({
      patient_name: this.fb.control('', Validators.required),
      surgery_type: this.fb.control('', Validators.required),
      date: this.fb.control('', Validators.required),
      assessed_by: this.fb.control('', Validators.required),
      fitness: this.fb.control('', Validators.required),
      risk_level: this.fb.control('', Validators.required)
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
