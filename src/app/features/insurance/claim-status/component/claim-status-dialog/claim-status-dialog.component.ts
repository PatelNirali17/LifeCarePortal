import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllPatientsService } from '../../../../patients/all-patients/all-patients.service';
import { AllDoctorsService } from '../../../../doctors/all-doctors/all-doctors.service';

@Component({
  selector: 'app-claim-status-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './claim-status-dialog.component.html',
  styleUrl: './claim-status-dialog.component.scss'
})
export class ClaimStatusDialogComponent {
  ClaimStatusForm!: FormGroup;
  PatientList: any;
  DoctorList: any;

  constructor(public dialogRef: MatDialogRef<ClaimStatusDialogComponent>, private fb: NonNullableFormBuilder, private allPatientService: AllPatientsService,
    private allDoctorService: AllDoctorsService,
    @Optional() @Inject(MAT_DIALOG_DATA) public ClaimStatusDetails: any) {
    this.ClaimStatusForm = this.fb.group({
      patientName: this.fb.control('', Validators.required),
      claimType: this.fb.control('', Validators.required),
      claimStatus: this.fb.control('', Validators.required),
      doctorName: this.fb.control('', Validators.required),
      hospitalName: this.fb.control('', Validators.required),
      claimAmount: this.fb.control('', Validators.required),
      approvedAmount: this.fb.control('', Validators.required),
      claimDate: this.fb.control('', Validators.required),
      rejectionReason: this.fb.control('', Validators.required),
    })

    this.allPatientService.GetAllPatients().subscribe({
      next: (result: any) => {
        this.PatientList = result
      },
    })
    this.allDoctorService.GetAllDoctors().subscribe({
      next: (result: any) => {
        this.DoctorList = result
      },
    })
  }

}
