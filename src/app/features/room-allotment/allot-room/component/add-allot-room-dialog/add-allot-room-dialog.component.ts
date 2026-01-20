
import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RoomMasterService } from '../../../room-master/room-master.service';
import { AllotRoomService } from '../../allot-room.service';
import { BedMasterService } from '../../../bed-master/bed-master.service';
import { HttpClient } from '@angular/common/http';
import { AllPatientsService } from '../../../../patients/all-patients/all-patients.service';
import { AllDoctorsService } from '../../../../doctors/all-doctors/all-doctors.service';

@Component({
  selector: 'app-add-allot-room-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-allot-room-dialog.component.html',
  styleUrl: './add-allot-room-dialog.component.scss'
})
export class AddAllotRoomDialogComponent {
  AllotForm!: FormGroup;
  RoomList: any[] = [];
  BedList: any[] = [];
  PatientList: any[] = [];
  DoctorList: any;

  constructor(public dialogRef: MatDialogRef<AddAllotRoomDialogComponent>, private fb: NonNullableFormBuilder, private allPatientsService: AllPatientsService,
    private roomMasterService: RoomMasterService, private bedMasterService: BedMasterService, private allDoctorsService: AllDoctorsService,
    private allotRoomService: AllotRoomService,
    @Optional() @Inject(MAT_DIALOG_DATA) public AllotRoomDetails: any) {

    this.AllotForm = this.fb.group({
      patientId: this.fb.control('', Validators.required),
      roomId: this.fb.control('', Validators.required),
      bedId: this.fb.control('', Validators.required),
      doctor: this.fb.control('', Validators.required),
      allotmentDate: this.fb.control('', Validators.required),
      status: this.fb.control('', Validators.required)
    })

    this.roomMasterService.GetRoomMaster().subscribe({ next: (r: any) => this.RoomList = r || [] });
    this.bedMasterService.GetBedMaster().subscribe({ next: (b: any) => this.BedList = b || [] });
    this.allPatientsService.GetAllPatients().subscribe({ next: (p: any) => this.PatientList = p || [] });
    this.allDoctorsService.GetAllDoctors().subscribe({ next: (d: any) => this.DoctorList = d || [] });

    if (AllotRoomDetails) this.AllotForm.patchValue(AllotRoomDetails);
  }

  SaveAllot() {
    if (this.AllotForm.invalid) {
      this.AllotForm.markAllAsTouched();
      return;
    }

    const value = this.AllotForm.value;
    // set patientName from PatientList (patientId stored as Mobile)
    const patient = this.PatientList.find(p => p.Mobile === value.patientId) || {};
    value.patientName = patient.Name || value.patientName;
    // add derived roomNumber/bedNumber/roomType before returning
    const room = this.RoomList.find(r => r.roomId === value.roomId);
    const bed = this.BedList.find((b: any) => b.bedId === value.bedId) || {};
    value.roomNumber = room?.roomNumber;
    value.bedNumber = bed?.bedNumber;
    value.roomType = room?.roomType;

    this.dialogRef.close(value);
  }

}
