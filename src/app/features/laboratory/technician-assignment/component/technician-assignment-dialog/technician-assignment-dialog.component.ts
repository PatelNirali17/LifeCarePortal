import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllDoctorsService } from '../../../../doctors/all-doctors/all-doctors.service';
import { AllPatientsService } from '../../../../patients/all-patients/all-patients.service';
import { TestCatalogService } from '../../../test-catalog/test-catalog.service';

@Component({
  selector: 'app-technician-assignment-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './technician-assignment-dialog.component.html',
  styleUrl: './technician-assignment-dialog.component.scss'
})
export class TechnicianAssignmentDialogComponent {
  TechnicianAssignmentForm!: FormGroup;
  DepartmentList: any;
  PatientList: any;
  TestList: any;

  constructor(public dialogRef: MatDialogRef<TechnicianAssignmentDialogComponent>, private fb: NonNullableFormBuilder, private allDoctorsService: AllDoctorsService,
    private allPatientService: AllPatientsService, private testCatalogService: TestCatalogService,
    @Optional() @Inject(MAT_DIALOG_DATA) public TechnicianAssignmentDetails: any) {
    this.TechnicianAssignmentForm = this.fb.group({
      Technician: this.fb.control('', Validators.required),
      TestName: this.fb.control('', Validators.required),
      PatientName: this.fb.control('', Validators.required),
      AssignedDate: this.fb.control('', Validators.required),
      Priority: this.fb.control('', Validators.required),
      Status: this.fb.control('', Validators.required),
      Department: this.fb.control('', Validators.required)
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
