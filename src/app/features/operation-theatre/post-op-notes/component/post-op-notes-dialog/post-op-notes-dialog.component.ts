import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllDoctorsService } from '../../../../doctors/all-doctors/all-doctors.service';
import { AllPatientsService } from '../../../../patients/all-patients/all-patients.service';

@Component({
  selector: 'app-post-op-notes-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './post-op-notes-dialog.component.html',
  styleUrl: './post-op-notes-dialog.component.scss'
})
export class PostOpNotesDialogComponent {
  PostOpNotesForm!: FormGroup;
  PatientList: any;
  DoctorList: any;

  constructor(public dialogRef: MatDialogRef<PostOpNotesDialogComponent>, private fb: NonNullableFormBuilder, private allDoctorsService: AllDoctorsService,
    private allPatientService: AllPatientsService,
    @Optional() @Inject(MAT_DIALOG_DATA) public PostOpNotesDetails: any) {
    this.PostOpNotesForm = this.fb.group({
      patient_name: this.fb.control('', Validators.required),
      surgery_type: this.fb.control('', Validators.required),
      date: this.fb.control('', Validators.required),
      recorded_by: this.fb.control('', Validators.required),
      recovery: this.fb.control('', Validators.required),
      pain_level: this.fb.control('', Validators.required)
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
