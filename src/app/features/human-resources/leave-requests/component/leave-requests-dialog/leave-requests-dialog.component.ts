import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllStaffService } from '../../../../staff/all-staff/all-staff.service';
import { LeaveTypesService } from '../../../leave-types/leave-types.service';
import { DepartmentOverviewService } from '../../../../departments/department-overview/department-overview.service';

@Component({
  selector: 'app-leave-requests-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './leave-requests-dialog.component.html',
  styleUrl: './leave-requests-dialog.component.scss'
})
export class LeaveRequestsDialogComponent {
  LeaveRequestsForm!: FormGroup;
  StaffList: any;
  LeaveTypesList: any;
  ManagerList: any;

  constructor(public dialogRef: MatDialogRef<LeaveRequestsDialogComponent>, private fb: NonNullableFormBuilder, private allStaffService: AllStaffService,
    private leaveTypesService: LeaveTypesService, private departmentOverviewService: DepartmentOverviewService,
    @Optional() @Inject(MAT_DIALOG_DATA) public LeaveRequestsDetails: any
  ) {
    this.LeaveRequestsForm = this.fb.group({
      employeeid: this.fb.control('', Validators.required),
      managername: this.fb.control('', Validators.required),
      leavetype: this.fb.control('', Validators.required),
      startdate: this.fb.control('', Validators.required),
      enddate: this.fb.control('', Validators.required),
      totaldays: this.fb.control('', Validators.required),
      reason: this.fb.control('', Validators.required),
    })

    this.allStaffService.GetAllStaff().subscribe({
      next: (result: any) => {
        this.StaffList = result
      },
    })
    this.leaveTypesService.GetAllLeaveTypes().subscribe({
      next: (result: any) => {
        this.LeaveTypesList = result
      },
    })

  }

  onEmployeeChange(event: any) {
    const employee = this.StaffList.find((s: any) => s.Name == event.value)
    this.departmentOverviewService.GetAllDepartmentOverview().subscribe({
      next: (result: any) => {
        this.ManagerList = result?.filter((s: any) => s.DepartmentName == employee.Department)
      },
    })
  }


}
