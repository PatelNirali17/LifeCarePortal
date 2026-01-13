import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllPatientsService } from '../../../all-patients/all-patients.service';

@Component({
  selector: 'app-add-patients-records-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-patients-records-dialog.component.html',
  styleUrl: './add-patients-records-dialog.component.scss'
})
export class AddPatientsRecordsDialogComponent {
  PatientRecordsForm!: FormGroup;
  DoctorList: any;
  PatientsList: any;

  constructor(public dialogRef: MatDialogRef<AddPatientsRecordsDialogComponent>, private fb: NonNullableFormBuilder, private allPatientsService: AllPatientsService,
    @Optional() @Inject(MAT_DIALOG_DATA) public PatientDetails: any) {
    this.PatientRecordsForm = this.fb.group({
      PatientID: this.fb.control('', Validators.required),
      DateofBirth: this.fb.control('', Validators.required),
      Gender: this.fb.control('', Validators.required),
      DateofAdmission: this.fb.control(new Date(), Validators.required),
      Diagnosis: this.fb.control('', Validators.required),
      TreatmentPlan: this.fb.control('', Validators.required),
      Medications: this.fb.control(''),
      Nextfollowup: this.fb.control('', Validators.required),
      DoctorNotes: this.fb.control(''),
      Status: this.fb.control('', Validators.required),
      EmergencyContact: this.fb.control(''),
      InsuranceProvider: this.fb.control('')
    })
    this.allPatientsService.GetAllPatients().subscribe({
      next: (result: any) => {
        this.PatientsList = result
      },
    })
  }
}
