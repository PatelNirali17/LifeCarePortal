import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-birth-records-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-birth-records-dialog.component.html',
  styleUrl: './add-birth-records-dialog.component.scss'
})
export class AddBirthRecordsDialogComponent {
  BirthRecordsForm!: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddBirthRecordsDialogComponent>, private fb: NonNullableFormBuilder, 
    @Optional() @Inject(MAT_DIALOG_DATA) public BirthRecordsDetails: any) {
    this.BirthRecordsForm = this.fb.group({
      CaseNumber: this.fb.control('', Validators.required),
      ChildName: this.fb.control('', Validators.required),
      Gender: this.fb.control('', Validators.required),
      BirthDate: this.fb.control('', Validators.required),
      MotherName: this.fb.control('', Validators.required),
      FatherName: this.fb.control('', Validators.required),
      Mobile: this.fb.control('', Validators.required),
      Address: this.fb.control('', Validators.required),
      Notes: this.fb.control('', Validators.required),
    })

  }
}
