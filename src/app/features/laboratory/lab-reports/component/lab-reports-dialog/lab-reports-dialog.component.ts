import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllDoctorsService } from '../../../../doctors/all-doctors/all-doctors.service';
import { AllPatientsService } from '../../../../patients/all-patients/all-patients.service';
import { TestCatalogService } from '../../../test-catalog/test-catalog.service';

@Component({
  selector: 'app-lab-reports-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './lab-reports-dialog.component.html',
  styleUrl: './lab-reports-dialog.component.scss'
})
export class LabReportsDialogComponent {
  LabReportsForm!: FormGroup;
  PatientList: any;
  TestList: any;
  DoctorList: any;
  DepartmentList: any;

  constructor(public dialogRef: MatDialogRef<LabReportsDialogComponent>, private fb: NonNullableFormBuilder, private allDoctorsService: AllDoctorsService,
    private allPatientService: AllPatientsService, private testCatalogService: TestCatalogService,
    @Optional() @Inject(MAT_DIALOG_DATA) public LabReportsDetails: any) {
    this.LabReportsForm = this.fb.group({
      PatientName: this.fb.control('', Validators.required),
      Tests: this.fb.control('', Validators.required),
      Doctor: this.fb.control('', Validators.required),
      ReportDate: this.fb.control('', Validators.required),
      Status: this.fb.control('', Validators.required),
      Department: this.fb.control('', Validators.required),
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
    this.testCatalogService.GetAllTestCatalog().subscribe({
      next: (result: any) => {
        this.TestList = result
      },
    })
  }
}
