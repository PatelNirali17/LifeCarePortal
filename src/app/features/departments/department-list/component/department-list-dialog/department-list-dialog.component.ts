import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-department-list-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './department-list-dialog.component.html',
  styleUrl: './department-list-dialog.component.scss'
})
export class DepartmentListDialogComponent {
  DepartmentForm!: FormGroup;

  constructor(public dialogRef: MatDialogRef<DepartmentListDialogComponent>, private fb: NonNullableFormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public DepartmentDetails: any) {
    this.DepartmentForm = this.fb.group({
      Name: this.fb.control('', Validators.required),
      Description: this.fb.control('', Validators.required),
      Status: this.fb.control('', Validators.required)
    })

  }


}
