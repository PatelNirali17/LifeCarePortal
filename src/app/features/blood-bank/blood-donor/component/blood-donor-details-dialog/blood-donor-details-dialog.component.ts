import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-blood-donor-details-dialog',
  imports: [SharedModule, CommonModule],
  templateUrl: './blood-donor-details-dialog.component.html',
  styleUrl: './blood-donor-details-dialog.component.scss'
})
export class BloodDonorDetailsDialogComponent {

  constructor(public dialogRef: MatDialogRef<BloodDonorDetailsDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public BloodDonorDetails: any) {
  }
}
