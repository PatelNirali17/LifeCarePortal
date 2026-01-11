import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from '../../../../../core/service/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { CreateRoleService } from '../../create-role.service';

@Component({
  selector: 'app-create-role-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-role-dialog.component.html',
  styleUrl: './create-role-dialog.component.scss'
})
export class CreateRoleDialogComponent {
  RoleForm!: FormGroup;

  constructor(public dialogRef: MatDialogRef<CreateRoleDialogComponent>, private fb: NonNullableFormBuilder, private createRoleService: CreateRoleService,
    private authenticationService: AuthenticationService, private toast: ToastrService,
    @Optional() @Inject(MAT_DIALOG_DATA) public RoleDetails: any) {
    this.RoleForm = this.fb.group({
      Name: this.fb.control('', Validators.required),
    })

    if (RoleDetails != null && RoleDetails.id > 0) {
      this.RoleForm.get('Name')?.patchValue(RoleDetails.Name)
    }
  }

  SaveRoleDetails() {
    if (this.RoleForm.invalid) {
      this.RoleForm.markAllAsTouched()
      return
    }

    this.RoleForm.value.CreatedID = this.authenticationService.currentUserValue.Data.id
    this.RoleForm.value.UpdatedID = this.authenticationService.currentUserValue.Data.id
    if (this.RoleDetails?.id > 0) {
      this.RoleForm.value.id = this.RoleDetails?.id
      this.createRoleService.UpdateRoleDetails(this.RoleForm.value).subscribe({
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
      this.createRoleService.SaveRoleDetails(this.RoleForm.value).subscribe({
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
