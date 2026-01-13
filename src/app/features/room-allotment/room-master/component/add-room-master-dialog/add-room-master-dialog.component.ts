import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RoomMasterService } from '../../room-master.service';

@Component({
  selector: 'app-add-room-master-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-room-master-dialog.component.html',
  styleUrl: './add-room-master-dialog.component.scss'
})
export class AddRoomMasterDialogComponent {
  RoomMasterForm!: FormGroup;
  RoomTypeList: any;
  WardList: any;

  constructor(public dialogRef: MatDialogRef<AddRoomMasterDialogComponent>, private fb: NonNullableFormBuilder, private roomMasterService: RoomMasterService,
    @Optional() @Inject(MAT_DIALOG_DATA) public RoomMasterDetails: any
  ) {
    this.RoomMasterForm = this.fb.group({
      RoomNumber: this.fb.control('', Validators.required),
      RoomType: this.fb.control('', Validators.required),
      Ward: this.fb.control('', Validators.required),
      Floor: this.fb.control('', Validators.required),
      TotalBeds: this.fb.control('', Validators.required),
      ChargePerDay: this.fb.control('', Validators.required),
      Status: this.fb.control('', Validators.required),
    })
    this.roomMasterService.GetRoomType().subscribe({
      next: (data: any) => {
        this.RoomTypeList = data
      }
    })
    this.roomMasterService.GetWardList().subscribe({
      next: (data: any) => {
        this.WardList = data
      }
    })
  }
}
