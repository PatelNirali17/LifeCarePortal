import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-expenses-details-dialog',
  imports: [SharedModule, CommonModule],
  templateUrl: './expenses-details-dialog.component.html',
  styleUrl: './expenses-details-dialog.component.scss'
})
export class ExpensesDetailsDialogComponent {

  constructor(public dialogRef: MatDialogRef<ExpensesDetailsDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public ExpensesDetails: any) {
  }
}
