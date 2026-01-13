import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-bed-master-details-dialog',
  imports: [SharedModule, CommonModule],
  templateUrl: './bed-master-details-dialog.component.html',
  styleUrl: './bed-master-details-dialog.component.scss'
})
export class BedMasterDetailsDialogComponent {

  constructor(public dialogRef: MatDialogRef<BedMasterDetailsDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public BedDetails: any) {
  }

}
