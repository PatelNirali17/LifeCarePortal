import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-room-master-details-dialog',
  imports: [SharedModule,CommonModule],
  templateUrl: './room-master-details-dialog.component.html',
  styleUrl: './room-master-details-dialog.component.scss'
})
export class RoomMasterDetailsDialogComponent {

  constructor(public dialogRef: MatDialogRef<RoomMasterDetailsDialogComponent>, 
    @Optional() @Inject(MAT_DIALOG_DATA) public RoomMasterDetails: any) {
  }
}
