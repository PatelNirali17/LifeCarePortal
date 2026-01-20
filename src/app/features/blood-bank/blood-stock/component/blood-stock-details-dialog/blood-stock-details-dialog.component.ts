import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-blood-stock-details-dialog',
  imports: [SharedModule, CommonModule],
  templateUrl: './blood-stock-details-dialog.component.html',
  styleUrl: './blood-stock-details-dialog.component.scss'
})
export class BloodStockDetailsDialogComponent {

  constructor(public dialogRef: MatDialogRef<BloodStockDetailsDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public BloodStockDetails: any) {
  }

}
