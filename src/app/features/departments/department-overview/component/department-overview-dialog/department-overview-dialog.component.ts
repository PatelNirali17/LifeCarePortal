import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllDoctorsService } from '../../../../doctors/all-doctors/all-doctors.service';

@Component({
  selector: 'app-department-overview-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './department-overview-dialog.component.html',
  styleUrl: './department-overview-dialog.component.scss'
})
export class DepartmentOverviewDialogComponent {
  DepartmentOverviewForm!: FormGroup;
  DepartmentList: any;
  DoctorList: any;

  constructor(public dialogRef: MatDialogRef<DepartmentOverviewDialogComponent>, private fb: NonNullableFormBuilder, private allDoctorService: AllDoctorsService,
    @Optional() @Inject(MAT_DIALOG_DATA) public DepartmentOverviewDetails: any) {
    this.DepartmentOverviewForm = this.fb.group({
      DepartmentName: this.fb.control('', Validators.required),
      Date: this.fb.control('', Validators.required),
      DepartmentHead: this.fb.control('', Validators.required),
      Status: this.fb.control('', Validators.required),
    })

    this.allDoctorService.GetAllDepartment().subscribe({
      next: (result: any) => {
        this.DepartmentList = result
      },
    })
    this.allDoctorService.GetAllDoctors().subscribe({
      next: (result: any) => {
        this.DoctorList = result
      },
    })
  }

}
