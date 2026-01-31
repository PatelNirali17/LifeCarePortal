import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllDoctorsService } from '../../../../doctors/all-doctors/all-doctors.service';
import { AllPatientsService } from '../../../../patients/all-patients/all-patients.service';

@Component({
  selector: 'app-test-ordering-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './test-ordering-dialog.component.html',
  styleUrl: './test-ordering-dialog.component.scss'
})
export class TestOrderingDialogComponent {
  TestOrderingForm!: FormGroup;
  PatientList: any;
  DoctorList: any;

  constructor(public dialogRef: MatDialogRef<TestOrderingDialogComponent>, private fb: NonNullableFormBuilder, private allDoctorsService: AllDoctorsService,
    private allPatientService: AllPatientsService,
    @Optional() @Inject(MAT_DIALOG_DATA) public TestOrderingDetails: any) {
    this.TestOrderingForm = this.fb.group({
      PatientName: this.fb.control('', Validators.required),
      TestName: this.fb.control('', Validators.required),
      OrderingPhysician: this.fb.control('', Validators.required),
      OrderDate: this.fb.control('', Validators.required),
      Priority: this.fb.control('', Validators.required),
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
