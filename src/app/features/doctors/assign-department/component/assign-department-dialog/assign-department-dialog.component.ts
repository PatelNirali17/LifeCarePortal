import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllDoctorsService } from '../../../all-doctors/all-doctors.service';

@Component({
  selector: 'app-assign-department-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './assign-department-dialog.component.html',
  styleUrl: './assign-department-dialog.component.scss'
})
export class AssignDepartmentDialogComponent {
  AssignDepartmentForm!: FormGroup;
  DepartmentList: any;
  DoctorList: any;
  constructor(public dialogRef: MatDialogRef<AssignDepartmentDialogComponent>, private fb: NonNullableFormBuilder, private allDoctorsService: AllDoctorsService,
    @Optional() @Inject(MAT_DIALOG_DATA) public AssignDepartmentDetails: any
  ) {

    this.AssignDepartmentForm = this.fb.group({
      DoctorID: this.fb.control('', Validators.required),
      Department: this.fb.control('', Validators.required),
      Specialization: this.fb.control(''),
      AssignedDate: this.fb.control('', Validators.required),
      ShiftSchedule: this.fb.control(''),
      ExperienceLevel: this.fb.control(''),
      AssignmentStatus: this.fb.control(''),
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
  }
}
