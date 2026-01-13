
import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RoomMasterService } from '../../../room-master/room-master.service';
import { BedMasterService } from '../../bed-master.service';

@Component({
  selector: 'app-add-bed-master-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-bed-master-dialog.component.html',
  styleUrl: './add-bed-master-dialog.component.scss'
})
export class AddBedMasterDialogComponent {
  BedMasterForm!: FormGroup;
  RoomList: any[] = [];

  constructor(public dialogRef: MatDialogRef<AddBedMasterDialogComponent>, private fb: NonNullableFormBuilder,
    private roomMasterService: RoomMasterService, private bedMasterService: BedMasterService,
    @Optional() @Inject(MAT_DIALOG_DATA) public BedDetails: any) {

    this.BedMasterForm = this.fb.group({
      bedNumber: this.fb.control('', Validators.required),
      roomId: this.fb.control('', Validators.required),
      bedType: this.fb.control('', Validators.required),
      status: this.fb.control('', Validators.required)
    })

    this.roomMasterService.GetRoomMaster().subscribe({
      next: (data: any) => {
        this.RoomList = data || [];
      }
    })

    if (BedDetails) {
      this.BedMasterForm.patchValue(BedDetails)
    }
  }

  SaveBed() {
    if (this.BedMasterForm.invalid) {
      this.BedMasterForm.markAllAsTouched();
      return;
    }

    // For now, close dialog and return form value. Parent component should handle persistence.
    this.dialogRef.close(this.BedMasterForm.value);
  }

}
