import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-designation-list-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './designation-list-dialog.component.html',
  styleUrl: './designation-list-dialog.component.scss'
})
export class DesignationListDialogComponent {
  DesignationForm!: FormGroup;

  constructor(public dialogRef: MatDialogRef<DesignationListDialogComponent>, private fb: NonNullableFormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public DesignationDetails: any) {
    this.DesignationForm = this.fb.group({
      Name: this.fb.control('', Validators.required),
      Status: this.fb.control('', Validators.required)
    })

  }


}
