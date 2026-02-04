import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-leave-types-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './leave-types-dialog.component.html',
  styleUrl: './leave-types-dialog.component.scss'
})
export class LeaveTypesDialogComponent {
  LeaveTypesForm!: FormGroup;

  constructor(public dialogRef: MatDialogRef<LeaveTypesDialogComponent>, private fb: NonNullableFormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public LeaveTypesDetails: any
  ) {
    this.LeaveTypesForm = this.fb.group({
      leaveTypeName: this.fb.control('', Validators.required),
      description: this.fb.control('', Validators.required),
      category: this.fb.control('', Validators.required),
      leaveUnit: this.fb.control('', Validators.required),
      totalLeavesPerYear: this.fb.control('', Validators.required),
      CarryOverLimit: this.fb.control('', Validators.required),
      status: this.fb.control('', Validators.required),
    })
  }

}
