import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllDoctorsService } from '../../../../doctors/all-doctors/all-doctors.service';
import { AllPatientsService } from '../../../../patients/all-patients/all-patients.service';

@Component({
  selector: 'app-medication-history-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './medication-history-dialog.component.html',
  styleUrl: './medication-history-dialog.component.scss'
})
export class MedicationHistoryDialogComponent {
  MedicationHistoryForm!: FormGroup;
  PatientList: any;
  DoctorList: any;

  constructor(public dialogRef: MatDialogRef<MedicationHistoryDialogComponent>, private fb: NonNullableFormBuilder, private allDoctorsService: AllDoctorsService,
    private allPatientService: AllPatientsService,
    @Optional() @Inject(MAT_DIALOG_DATA) public MedicationHistoryDetails: any) {
    this.MedicationHistoryForm = this.fb.group({
      PatientName: this.fb.control('', Validators.required),
      DrugName: this.fb.control('', Validators.required),
      Dosage: this.fb.control('', Validators.required),
      Frequency: this.fb.control('', Validators.required),
      PrescribedBy: this.fb.control('', Validators.required),
      StartDate: this.fb.control('', Validators.required),
      EndDate: this.fb.control('', Validators.required),
      Status: this.fb.control('', Validators.required),
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
