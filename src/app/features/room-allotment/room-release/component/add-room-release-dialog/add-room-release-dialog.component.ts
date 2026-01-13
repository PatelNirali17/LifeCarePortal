import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllPatientsService } from '../../../../patients/all-patients/all-patients.service';
import { BedMasterService } from '../../../bed-master/bed-master.service';
import { RoomMasterService } from '../../../room-master/room-master.service';

@Component({
  selector: 'app-add-room-release-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-room-release-dialog.component.html',
  styleUrl: './add-room-release-dialog.component.scss'
})
export class AddRoomReleaseDialogComponent {
  RoomReleaseForm!: FormGroup;
  RoomList: any[] = [];
  BedList: any[] = [];
  PatientsList: any;

  constructor(public dialogRef: MatDialogRef<AddRoomReleaseDialogComponent>, private fb: NonNullableFormBuilder, private allPatientsService: AllPatientsService,
    private roomMasterService: RoomMasterService, private bedMasterService: BedMasterService,
    @Optional() @Inject(MAT_DIALOG_DATA) public RoomReleaseDetails: any) {

    this.RoomReleaseForm = this.fb.group({
      patientId: this.fb.control('', Validators.required),
      roomId: this.fb.control('', Validators.required),
      bedId: this.fb.control('', Validators.required),
      dischargeDate: this.fb.control('', Validators.required),
      totalDays: this.fb.control('', Validators.required),
      roomCharges: this.fb.control('', Validators.required),
      roomStatusAfterRelease: this.fb.control('', Validators.required)
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
