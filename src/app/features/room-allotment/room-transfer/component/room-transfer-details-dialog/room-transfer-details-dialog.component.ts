import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-room-transfer-details-dialog',
  imports: [SharedModule,CommonModule],
  templateUrl: './room-transfer-details-dialog.component.html',
  styleUrl: './room-transfer-details-dialog.component.scss'
})
export class RoomTransferDetailsDialogComponent {

  constructor(public dialogRef: MatDialogRef<RoomTransferDetailsDialogComponent>, 
    @Optional() @Inject(MAT_DIALOG_DATA) public RoomTransferDetails: any) {
  }
}
