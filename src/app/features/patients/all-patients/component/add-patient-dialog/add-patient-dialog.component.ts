import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllDoctorsService } from '../../../../doctors/all-doctors/all-doctors.service';

@Component({
  selector: 'app-add-patient-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-patient-dialog.component.html',
  styleUrl: './add-patient-dialog.component.scss'
})
export class AddPatientDialogComponent {
  PatientForm!: FormGroup;
  DoctorList: any;

  constructor(public dialogRef: MatDialogRef<AddPatientDialogComponent>, private fb: NonNullableFormBuilder, private allDoctorsService: AllDoctorsService,
    @Optional() @Inject(MAT_DIALOG_DATA) public PatientDetails: any) {
    this.PatientForm = this.fb.group({
      Name: this.fb.control('', Validators.required),
      Treatment: this.fb.control(''),
      Gender: this.fb.control('', Validators.required),
      Mobile: this.fb.control('', Validators.required),
      AdmissionDate: this.fb.control(new Date()),
      DoctorAssigned: this.fb.control('',Validators.required),
      Address: this.fb.control('',),
      BloodGroup: this.fb.control(''),
      DischargeDate: this.fb.control(''),
      Status: this.fb.control('',Validators.required),
    })
    this.allDoctorsService.GetAllDoctors().subscribe({
      next: (result: any) => {
        this.DoctorList = result
      },
    })
  }
}
