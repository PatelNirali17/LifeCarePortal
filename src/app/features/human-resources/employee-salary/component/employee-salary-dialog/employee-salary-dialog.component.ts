import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllDoctorsService } from '../../../../doctors/all-doctors/all-doctors.service';
import { AllStaffService } from '../../../../staff/all-staff/all-staff.service';

@Component({
  selector: 'app-employee-salary-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './employee-salary-dialog.component.html',
  styleUrl: './employee-salary-dialog.component.scss'
})
export class EmployeeSalaryDialogComponent {
  EmployeeSalaryForm!: FormGroup;
  StaffList: any;
  DepartmentList: any;

  constructor(public dialogRef: MatDialogRef<EmployeeSalaryDialogComponent>, private fb: NonNullableFormBuilder, private allDoctorsService: AllDoctorsService,
    private allStaffService: AllStaffService,
    @Optional() @Inject(MAT_DIALOG_DATA) public EmployeeSalaryDetails: any) {
    this.EmployeeSalaryForm = this.fb.group({
      employeeId: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
      department: this.fb.control('', Validators.required),
      salary: this.fb.control('', Validators.required),
      bonus: this.fb.control('', Validators.required),
      deductions: this.fb.control('', Validators.required),
      netSalary: this.fb.control('', Validators.required)
    })
    this.allDoctorsService.GetAllDepartment().subscribe({
      next: (result: any) => {
        this.DepartmentList = result
      },
    })
    this.allStaffService.GetAllStaff().subscribe({
      next: (result: any) => {
        this.StaffList = result
      },
    })
  }

}
