import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-blood-issued-details-dialog',
  imports: [SharedModule, CommonModule],
  templateUrl: './blood-issued-details-dialog.component.html',
  styleUrl: './blood-issued-details-dialog.component.scss'
})
export class BloodIssuedDetailsDialogComponent {

  constructor(public dialogRef: MatDialogRef<BloodIssuedDetailsDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public BloodIssuedDetails: any) {
  }

}
