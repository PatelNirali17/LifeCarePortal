import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-blood-donor-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './blood-donor-dialog.component.html',
  styleUrl: './blood-donor-dialog.component.scss'
})
export class BloodDonorDialogComponent {
  BloodDonorForm!: FormGroup;
  BloodTypeList = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  constructor(public dialogRef: MatDialogRef<BloodDonorDialogComponent>, private fb: NonNullableFormBuilder,
    @Inject(MAT_DIALOG_DATA) public BloodDonorDetails: any) {
    this.BloodDonorForm = this.fb.group({
      donorId: this.fb.control('', Validators.required),
      donorName: this.fb.control('', Validators.required),
      dateOfBirth: this.fb.control('', Validators.required),
      gender: this.fb.control('', Validators.required),
      bloodType: this.fb.control('', Validators.required),
      phoneNumber: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
      donorStatus: this.fb.control('', Validators.required),
      lastDonationDate: this.fb.control('', Validators.required),
      nextEligibleDonationDate: this.fb.control('', Validators.required),
      healthStatus: this.fb.control('', Validators.required),
      donorLocation: this.fb.control('', Validators.required)
    });
  }
}
