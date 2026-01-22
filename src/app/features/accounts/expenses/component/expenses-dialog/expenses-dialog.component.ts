import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllDoctorsService } from '../../../../doctors/all-doctors/all-doctors.service';

@Component({
  selector: 'app-expenses-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './expenses-dialog.component.html',
  styleUrl: './expenses-dialog.component.scss'
})
export class ExpensesDialogComponent {
  ExpensesForm!: FormGroup;
  DepartmentList: any;

  constructor(public dialogRef: MatDialogRef<ExpensesDialogComponent>, private fb: NonNullableFormBuilder, private allDoctorsService: AllDoctorsService,
    @Inject(MAT_DIALOG_DATA) public ExpensesDetails: any) {
    this.ExpensesForm = this.fb.group({
      date: this.fb.control('', Validators.required),
      category: this.fb.control('', Validators.required),
      description: this.fb.control('', Validators.required),
      vendor: this.fb.control('', Validators.required),
      department: this.fb.control('', Validators.required),
      amount: this.fb.control('', Validators.required),
      tax: this.fb.control('', Validators.required),
      total_cost: this.fb.control('', Validators.required),
      payment_method: this.fb.control('', Validators.required),
      approval_status: this.fb.control('', Validators.required),
      payment_status: this.fb.control('', Validators.required),
      notes: this.fb.control('', Validators.required)
    });
    this.allDoctorsService.GetAllDepartment().subscribe({
      next: (res) => {
        this.DepartmentList = res
      }
    })
  }
}
