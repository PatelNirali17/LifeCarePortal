import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllPatientsService } from '../../../../patients/all-patients/all-patients.service';
import { BloodStockService } from '../../../blood-stock/blood-stock.service';
import { AllDoctorsService } from '../../../../doctors/all-doctors/all-doctors.service';

@Component({
  selector: 'app-blood-issued-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './blood-issued-dialog.component.html',
  styleUrl: './blood-issued-dialog.component.scss'
})
export class BloodIssuedDialogComponent {
  BloodIssuedForm!: FormGroup;
  PatientList: any;
  BloodStockList: any;
  DoctorList: any;

  constructor(public dialogRef: MatDialogRef<BloodIssuedDialogComponent>, private fb: NonNullableFormBuilder, private allPatientsService: AllPatientsService,
    private bloodStockService: BloodStockService, private allDoctorsService: AllDoctorsService,
    @Inject(MAT_DIALOG_DATA) public BloodIssuedDetails: any) {
    this.BloodIssuedForm = this.fb.group({
      patient_id: this.fb.control('', Validators.required),
      blood_product_id: this.fb.control('', Validators.required),
      quantity_issued: this.fb.control('', Validators.required),
      issue_date: this.fb.control('', Validators.required),
      issued_by: this.fb.control('', Validators.required),
      issue_reason: this.fb.control('', Validators.required),
      doctor_name: this.fb.control('', Validators.required),
      blood_transfusion_date: this.fb.control('', Validators.required),
      remarks: this.fb.control('', Validators.required),
    });
    this.allPatientsService.GetAllPatients().subscribe({
      next: (res) => {
        this.PatientList = res
      }
    })
    this.bloodStockService.GetAllBloodStock().subscribe({
      next: (res) => {
        this.BloodStockList = res
      }
    })
    this.allDoctorsService.GetAllDoctors().subscribe({
      next: (res) => {
        this.DoctorList = res
      }
    })
  }
}
