import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-doctor-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-doctor-dialog.component.html',
  styleUrl: './add-doctor-dialog.component.scss'
})
export class AddDoctorDialogComponent {
  DoctorForm!: FormGroup;
  DepartmentList: any;
  constructor(public dialogRef: MatDialogRef<AddDoctorDialogComponent>,private fb: NonNullableFormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public DoctorDetails: any
  ) {
    this.DoctorForm = this.fb.group({
      Name: this.fb.control('', Validators.required),
      Gender: this.fb.control('', Validators.required),
      Mobile: this.fb.control('', Validators.required),
      Department: this.fb.control('', Validators.required),
      Specialization: this.fb.control('', Validators.required),
      Address: this.fb.control(''),
      DateOfBirth: this.fb.control('', Validators.required),
      Email: this.fb.control('', Validators.required),
      Degree: this.fb.control('', Validators.required),
      JoiningDate: this.fb.control('', Validators.required),
      Experience: this.fb.control('', Validators.required),
      ConsultationFee: this.fb.control('', Validators.required),
      Availability: this.fb.control('', Validators.required),
      Rating: this.fb.control(''),
      ClinicLocation: this.fb.control('', Validators.required)
    })
  }

}
