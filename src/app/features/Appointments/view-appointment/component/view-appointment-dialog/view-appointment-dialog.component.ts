import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-appointment-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './view-appointment-dialog.component.html',
  styleUrl: './view-appointment-dialog.component.scss'
})
export class ViewAppointmentDialogComponent {
  AppointmentForm!: FormGroup;
  DoctorList: any;
  AppointmentStatusList: any;
  VisitTypeList: any;
  PaymentStatusList: any;
  constructor(public dialogRef: MatDialogRef<ViewAppointmentDialogComponent>, private fb: NonNullableFormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public AppointmentDetails: any) {
    this.AppointmentForm = this.fb.group({
      Name: this.fb.control('', Validators.required),
      Email: this.fb.control('', Validators.required),
      Gender: this.fb.control('', Validators.required),
      DateofBirth:this.fb.control('',Validators.required),
      Address:this.fb.control(''),
      AppointmentDate: this.fb.control(new Date(), Validators.required),
      AppointmentTime: this.fb.control(new Date(), Validators.required),
      Mobile: this.fb.control('', Validators.required),
      DoctorName: this.fb.control('', Validators.required),
      Injury: this.fb.control(''),
      AppointmentStatus: this.fb.control(''),
      VisitType: this.fb.control(''),
      PaymentStatus: this.fb.control(''),
      InsuranceProvider: this.fb.control(''),
      Notes: this.fb.control('')
    })
  }
}
