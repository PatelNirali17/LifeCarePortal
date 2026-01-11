import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-shift-management-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './shift-management-dialog.component.html',
  styleUrl: './shift-management-dialog.component.scss'
})
export class ShiftManagementDialogComponent {
  ShiftManagementForm!: FormGroup;
  DepartmentList: any;

  constructor(public dialogRef: MatDialogRef<ShiftManagementDialogComponent>,private fb: NonNullableFormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public ShiftManagementDetails: any
  ) {
    
    this.ShiftManagementForm = this.fb.group({
      Name: this.fb.control('', Validators.required),
      Department: this.fb.control('', Validators.required),
      Specialization: this.fb.control(''),
      ShiftStartDate: this.fb.control('', Validators.required),
      ShiftEndDate: this.fb.control('',Validators.required),
      WorkDays: this.fb.control('',Validators.required),
      ShiftHours: this.fb.control('',Validators.required),
      ShiftType: this.fb.control('',Validators.required),
      AvailabilityStatus: this.fb.control('',Validators.required),
      OvertimeHours: this.fb.control(''),
      TotalHoursPerWeek: this.fb.control(''),
      ShiftNotes: this.fb.control(''),
    })
  }
}
