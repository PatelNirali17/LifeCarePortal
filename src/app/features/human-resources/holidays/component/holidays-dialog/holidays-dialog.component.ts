import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-holidays-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './holidays-dialog.component.html',
  styleUrl: './holidays-dialog.component.scss'
})
export class HolidaysDialogComponent {
  HolidaysForm!: FormGroup;

  constructor(public dialogRef: MatDialogRef<HolidaysDialogComponent>, private fb: NonNullableFormBuilder, 
    @Optional() @Inject(MAT_DIALOG_DATA) public HolidaysDetails: any
  ) {
    this.HolidaysForm = this.fb.group({
      name: this.fb.control('', Validators.required),
      date: this.fb.control('', Validators.required),
      shift: this.fb.control('', Validators.required),
      location: this.fb.control('', Validators.required),
      type: this.fb.control('', Validators.required),
      details: this.fb.control('', Validators.required),
    })
  }

}
