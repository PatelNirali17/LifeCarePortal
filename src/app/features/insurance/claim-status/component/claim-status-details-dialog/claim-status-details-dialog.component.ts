import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-claim-status-details-dialog',
  imports: [SharedModule, CommonModule],
  templateUrl: './claim-status-details-dialog.component.html',
  styleUrl: './claim-status-details-dialog.component.scss'
})
export class ClaimStatusDetailsDialogComponent {

  constructor(public dialogRef: MatDialogRef<ClaimStatusDetailsDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public ClaimStatusDetails: any) {
  }
}
