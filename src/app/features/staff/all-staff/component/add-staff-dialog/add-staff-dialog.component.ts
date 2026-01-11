import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-staff-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-staff-dialog.component.html',
  styleUrl: './add-staff-dialog.component.scss'
})
export class AddStaffDialogComponent {
  StaffForm!: FormGroup;
  DesignationList: any;
  ShiftList: any;
  constructor(public dialogRef: MatDialogRef<AddStaffDialogComponent>, private fb: NonNullableFormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public StaffDetails: any
  ) {
    this.StaffForm = this.fb.group({
      Name: this.fb.control('', Validators.required),
      Designation: this.fb.control('', Validators.required),
      Mobile: this.fb.control('', Validators.required),
      Email: this.fb.control('', Validators.required),
      JoiningDate: this.fb.control('', Validators.required),
      Salary: this.fb.control('',Validators.required),
      Status: this.fb.control('', Validators.required),
      Shift: this.fb.control('', Validators.required),
      Experience: this.fb.control(''),
      Gender: this.fb.control('', Validators.required),
      Address: this.fb.control(''),
    })
  }
}
