import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllDoctorsService } from '../../../../doctors/all-doctors/all-doctors.service';
import { AllPatientsService } from '../../../../patients/all-patients/all-patients.service';
import { TestCatalogService } from '../../../test-catalog/test-catalog.service';

@Component({
  selector: 'app-test-requests-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './test-requests-dialog.component.html',
  styleUrl: './test-requests-dialog.component.scss'
})
export class TestRequestsDialogComponent {
  TestRequestsForm!: FormGroup;
  DoctorList: any;
  PatientList: any;
  TestList: any;

  constructor(public dialogRef: MatDialogRef<TestRequestsDialogComponent>, private fb: NonNullableFormBuilder, private allDoctorsService: AllDoctorsService,
    private allPatientService: AllPatientsService,private testCatalogService : TestCatalogService,
    @Optional() @Inject(MAT_DIALOG_DATA) public TestRequestsDetails: any) {
    this.TestRequestsForm = this.fb.group({
      PatientName: this.fb.control('', Validators.required),
      TestName: this.fb.control('', Validators.required),
      Doctor: this.fb.control('', Validators.required),
      RequestDate: this.fb.control('', Validators.required),
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
     this.testCatalogService.GetAllTestCatalog().subscribe({
      next: (result: any) => {
        this.TestList = result
      },
    })
  }
}
