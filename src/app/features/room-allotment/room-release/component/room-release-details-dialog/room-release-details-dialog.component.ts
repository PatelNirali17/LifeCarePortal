import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-room-release-details-dialog',
  imports: [SharedModule, CommonModule],
  templateUrl: './room-release-details-dialog.component.html',
  styleUrl: './room-release-details-dialog.component.scss'
})
export class RoomReleaseDetailsDialogComponent {

  constructor(public dialogRef: MatDialogRef<RoomReleaseDetailsDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public RoomReleaseDetails: any) {
  }
}
