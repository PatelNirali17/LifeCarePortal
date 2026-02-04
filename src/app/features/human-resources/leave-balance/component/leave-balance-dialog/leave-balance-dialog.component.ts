import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllStaffService } from '../../../../staff/all-staff/all-staff.service';

@Component({
  selector: 'app-leave-balance-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './leave-balance-dialog.component.html',
  styleUrl: './leave-balance-dialog.component.scss'
})
export class LeaveBalanceDialogComponent {
  LeaveBalanceForm!: FormGroup;
  StaffList: any;

  constructor(public dialogRef: MatDialogRef<LeaveBalanceDialogComponent>, private fb: NonNullableFormBuilder, private allStaffService: AllStaffService,
    @Optional() @Inject(MAT_DIALOG_DATA) public LeaveBalanceDetails: any
  ) {
    this.LeaveBalanceForm = this.fb.group({
      EmployeeName: this.fb.control('', Validators.required),
      PreviousBalance: this.fb.control('', Validators.required),
      CurrentBalance: this.fb.control('', Validators.required),
      TotalBalance: this.fb.control('', Validators.required),
      UsedLeave: this.fb.control('', Validators.required),
      AcceptedLeave: this.fb.control('', Validators.required),
      RejectedLeave: this.fb.control('', Validators.required),
      ExpiredLeave: this.fb.control('', Validators.required),
      CarryOverBalance: this.fb.control('', Validators.required),
    })

    this.allStaffService.GetAllStaff().subscribe({
      next: (result: any) => {
        this.StaffList = result
      },
    })

  }

}
