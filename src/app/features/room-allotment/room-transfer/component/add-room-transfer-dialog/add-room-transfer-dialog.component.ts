import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RoomMasterService } from '../../../room-master/room-master.service';
import { BedMasterService } from '../../../bed-master/bed-master.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllPatientsService } from '../../../../patients/all-patients/all-patients.service';

@Component({
  selector: 'app-add-room-transfer-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-room-transfer-dialog.component.html',
  styleUrl: './add-room-transfer-dialog.component.scss'
})
export class AddRoomTransferDialogComponent {
  RoomTransferForm!: FormGroup;
  RoomList: any[] = [];
  BedList: any[] = [];
  PatientsList: any;

  constructor(public dialogRef: MatDialogRef<AddRoomTransferDialogComponent>, private fb: NonNullableFormBuilder, private allPatientsService: AllPatientsService,
    private roomMasterService: RoomMasterService, private bedMasterService: BedMasterService,
    @Optional() @Inject(MAT_DIALOG_DATA) public RoomTransferDetails: any) {

    this.RoomTransferForm = this.fb.group({
      patientId: this.fb.control('', Validators.required),
      fromRoom: this.fb.control('', Validators.required),
      toRoom: this.fb.control('', Validators.required),
      fromBed: this.fb.control('', Validators.required),
      toBed: this.fb.control('', Validators.required),
      transferDate: this.fb.control('', Validators.required),
      reason: this.fb.control('', Validators.required)
    })

    this.allPatientsService.GetAllPatients().subscribe({
      next: (data: any) => {
        this.PatientsList = data || [];
      }
    })

    this.roomMasterService.GetRoomMaster().subscribe({
      next: (data: any) => {
        this.RoomList = data || [];
      }
    })

    this.bedMasterService.GetBedMaster().subscribe({
      next: (data: any) => {
        this.BedList = data || [];
      }
    })
  }
}
