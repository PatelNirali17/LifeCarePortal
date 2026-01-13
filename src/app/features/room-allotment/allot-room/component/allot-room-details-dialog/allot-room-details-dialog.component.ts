
import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-allot-room-details-dialog',
  imports: [SharedModule, CommonModule],
  templateUrl: './allot-room-details-dialog.component.html',
  styleUrl: './allot-room-details-dialog.component.scss'
})
export class AllotRoomDetailsDialogComponent {
  constructor(public dialogRef: MatDialogRef<AllotRoomDetailsDialogComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }
}
