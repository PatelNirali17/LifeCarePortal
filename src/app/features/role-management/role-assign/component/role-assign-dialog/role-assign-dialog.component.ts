import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RoleAssignService } from '../../role-assign.service';
import { AuthenticationService } from '../../../../../core/service/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-role-assign-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './role-assign-dialog.component.html',
  styleUrl: './role-assign-dialog.component.scss'
})
export class RoleAssignDialogComponent {
  RoleAssignForm!: FormGroup;
  UserList: any;
  RoleList: any;

  constructor(public dialogRef: MatDialogRef<RoleAssignDialogComponent>, private fb: NonNullableFormBuilder, private roleAssignService: RoleAssignService,
    private authenticationService: AuthenticationService, private toast: ToastrService,
    @Optional() @Inject(MAT_DIALOG_DATA) public RoleAssignDetails: any) {
    this.RoleAssignForm = this.fb.group({
      UserID: this.fb.control('', Validators.required),
      RoleID: this.fb.control('', Validators.required),
    })

    this.roleAssignService.GetAllUser().subscribe({
      next: (result: any) => {
        this.UserList = result
      },
    })
    this.roleAssignService.GetAllRole().subscribe({
      next: (result: any) => {
        this.RoleList = result?.filter((s:any) => s.Status == "Active")
      },
    })

    if (RoleAssignDetails != null && RoleAssignDetails.id > 0) {
      this.RoleAssignForm.get('UserID')?.patchValue(RoleAssignDetails.UserID)
      this.RoleAssignForm.get('RoleID')?.patchValue(RoleAssignDetails.RoleID)
    }
  }

  SaveRoleAssignDetails() {
    if (this.RoleAssignForm.invalid) {
      this.RoleAssignForm.markAllAsTouched()
      return
    }

    this.RoleAssignForm.value.CreatedID = this.authenticationService.currentUserValue.Data.id
    this.RoleAssignForm.value.UpdatedID = this.authenticationService.currentUserValue.Data.id
    if (this.RoleAssignDetails?.id > 0) {
      this.RoleAssignForm.value.id = this.RoleAssignDetails?.id
      this.roleAssignService.UpdateRoleAssignDetails(this.RoleAssignForm.value).subscribe({
        next: (result) => {
          if (result.error == false) {
            this.dialogRef.close()
            this.toast.success('', 'Updated Successfully')
          } else {
            this.toast.error('', result.Message)
          }
        },
        error: (err) => {
          this.toast.error('', 'Something went wrong')
        }
      });
    } else {
      this.roleAssignService.SaveRoleAssignDetails(this.RoleAssignForm.value).subscribe({
        next: (result) => {
          if (result.error == false) {
            this.dialogRef.close()
            this.toast.success('', 'Save Successfully')
          } else {
            this.toast.error('', result.Message)
          }
        },
        error: (err) => {
          this.toast.error('', 'Something went wrong')
        }
      });
    }
  }
}
