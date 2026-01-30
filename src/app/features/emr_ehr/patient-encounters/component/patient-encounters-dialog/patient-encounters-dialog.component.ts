import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllDoctorsService } from '../../../../doctors/all-doctors/all-doctors.service';
import { AllPatientsService } from '../../../../patients/all-patients/all-patients.service';

@Component({
  selector: 'app-patient-encounters-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './patient-encounters-dialog.component.html',
  styleUrl: './patient-encounters-dialog.component.scss'
})
export class PatientEncountersDialogComponent {
  PatientEncountersForm!: FormGroup;
  PatientList: any;
  DoctorList: any;
  DepartmentList: any;

  constructor(public dialogRef: MatDialogRef<PatientEncountersDialogComponent>, private fb: NonNullableFormBuilder, private allDoctorsService: AllDoctorsService,
    private allPatientService: AllPatientsService,
    @Optional() @Inject(MAT_DIALOG_DATA) public PatientEncountersDetails: any) {
    this.PatientEncountersForm = this.fb.group({
      PatientName: this.fb.control('', Validators.required),
      Doctor: this.fb.control('', Validators.required),
      Date: this.fb.control('', Validators.required),
      Type: this.fb.control('', Validators.required),
      Department: this.fb.control('', Validators.required),
      Status: this.fb.control('', Validators.required),
    })
    this.allDoctorsService.GetAllDoctors().subscribe({
      next: (result: any) => {
        this.DoctorList = result
      },
    })
    this.allDoctorsService.GetAllDepartment().subscribe({
      next: (result: any) => {
        this.DepartmentList = result
      },
    })
    this.allPatientService.GetAllPatients().subscribe({
      next: (result: any) => {
        this.PatientList = result
      },
    })
  }
}
