import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-room-availability-details-dialog',
  imports: [SharedModule, CommonModule],
  templateUrl: './room-availability-details-dialog.component.html',
  styleUrl: './room-availability-details-dialog.component.scss'
})
export class RoomAvailabilityDetailsDialogComponent {

  constructor(public dialogRef: MatDialogRef<RoomAvailabilityDetailsDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public RoomAvailabilityDetails: any) {
  }
}
