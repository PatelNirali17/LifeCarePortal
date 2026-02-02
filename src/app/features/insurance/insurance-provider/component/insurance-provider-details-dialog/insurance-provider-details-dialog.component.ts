import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-insurance-provider-details-dialog',
  imports: [SharedModule, CommonModule],
  templateUrl: './insurance-provider-details-dialog.component.html',
  styleUrl: './insurance-provider-details-dialog.component.scss'
})
export class InsuranceProviderDetailsDialogComponent {

  constructor(public dialogRef: MatDialogRef<InsuranceProviderDetailsDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public InsuranceProviderDetails: any) {
  }
}
