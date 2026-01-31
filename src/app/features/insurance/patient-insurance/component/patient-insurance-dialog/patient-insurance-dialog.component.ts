import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllPatientsService } from '../../../../patients/all-patients/all-patients.service';

@Component({
  selector: 'app-patient-insurance-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './patient-insurance-dialog.component.html',
  styleUrl: './patient-insurance-dialog.component.scss'
})
export class PatientInsuranceDialogComponent {
  PatientInsuranceForm!: FormGroup;
  PatientList: any;

  constructor(public dialogRef: MatDialogRef<PatientInsuranceDialogComponent>, private fb: NonNullableFormBuilder, private allPatientService: AllPatientsService,
    @Optional() @Inject(MAT_DIALOG_DATA) public PatientInsuranceDetails: any) {
    this.PatientInsuranceForm = this.fb.group({
      patientId: this.fb.control('', Validators.required),
      insuranceCompanyName: this.fb.control('', Validators.required),
      policyNumber: this.fb.control('', Validators.required),
      policyType: this.fb.control('', Validators.required),
      planType: this.fb.control('', Validators.required),
      coverageAmount: this.fb.control('', Validators.required),
      coPayment: this.fb.control('', Validators.required),
      coverageStartDate: this.fb.control('', Validators.required),
      coverageEndDate: this.fb.control('', Validators.required),
      insuranceStatus: this.fb.control('', Validators.required)
    })

    this.allPatientService.GetAllPatients().subscribe({
      next: (result: any) => {
        this.PatientList = result
      },
    })
  }
}
