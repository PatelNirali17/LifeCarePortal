import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-income-details-dialog',
  imports: [SharedModule, CommonModule],
  templateUrl: './income-details-dialog.component.html',
  styleUrl: './income-details-dialog.component.scss'
})
export class IncomeDetailsDialogComponent {

  constructor(public dialogRef: MatDialogRef<IncomeDetailsDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public IncomeDetails: any) {
  }
}
