import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllDoctorsService } from '../../../../doctors/all-doctors/all-doctors.service';
import { AllPatientsService } from '../../../../patients/all-patients/all-patients.service';

@Component({
  selector: 'app-ot-scheduling-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './ot-scheduling-dialog.component.html',
  styleUrl: './ot-scheduling-dialog.component.scss'
})
export class OtSchedulingDialogComponent {
  OtSchedulingForm!: FormGroup;
  PatientList: any;
  DoctorList: any;

  constructor(public dialogRef: MatDialogRef<OtSchedulingDialogComponent>, private fb: NonNullableFormBuilder, private allDoctorsService: AllDoctorsService,
    private allPatientService: AllPatientsService,
    @Optional() @Inject(MAT_DIALOG_DATA) public OtSchedulingDetails: any) {
    this.OtSchedulingForm = this.fb.group({
      patient_name: this.fb.control('', Validators.required),
      surgery_type: this.fb.control('', Validators.required),
      surgeon: this.fb.control('', Validators.required),
      ot_room: this.fb.control('', Validators.required),
      date: this.fb.control('', Validators.required),
      time: this.fb.control('', Validators.required),
      duration: this.fb.control('', Validators.required),
      status: this.fb.control('', Validators.required)
    })
    this.allDoctorsService.GetAllDoctors().subscribe({
      next: (result: any) => {
        this.DoctorList = result
      },
    })
    this.allPatientService.GetAllPatients().subscribe({
      next: (result: any) => {
        this.PatientList = result
      },
    })
  }
}
