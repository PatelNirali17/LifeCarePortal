import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllDoctorsService } from '../../../../doctors/all-doctors/all-doctors.service';
import { AllPatientsService } from '../../../../patients/all-patients/all-patients.service';

@Component({
  selector: 'app-treatment-plans-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './treatment-plans-dialog.component.html',
  styleUrl: './treatment-plans-dialog.component.scss'
})
export class TreatmentPlansDialogComponent {
  TreatmentPlansForm!: FormGroup;
  PatientList: any;
  DoctorList: any;

  constructor(public dialogRef: MatDialogRef<TreatmentPlansDialogComponent>, private fb: NonNullableFormBuilder, private allDoctorsService: AllDoctorsService,
    private allPatientService: AllPatientsService,
    @Optional() @Inject(MAT_DIALOG_DATA) public TreatmentPlansDetails: any) {
    this.TreatmentPlansForm = this.fb.group({
      PatientName: this.fb.control('', Validators.required),
      Doctor: this.fb.control('', Validators.required),
      Diagnosis: this.fb.control('', Validators.required),
      Treatment: this.fb.control('', Validators.required),
      StartDate: this.fb.control('', Validators.required),
      EndDate: this.fb.control('', Validators.required),
      Status: this.fb.control('', Validators.required)
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
