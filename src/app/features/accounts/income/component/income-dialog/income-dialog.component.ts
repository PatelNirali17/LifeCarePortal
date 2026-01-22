import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllPatientsService } from '../../../../patients/all-patients/all-patients.service';
import { AllDoctorsService } from '../../../../doctors/all-doctors/all-doctors.service';

@Component({
  selector: 'app-income-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './income-dialog.component.html',
  styleUrl: './income-dialog.component.scss'
})
export class IncomeDialogComponent {
  IncomeForm!: FormGroup;
  PatientList: any;
  DoctorList: any;

  constructor(public dialogRef: MatDialogRef<IncomeDialogComponent>, private fb: NonNullableFormBuilder, private allPatientsService: AllPatientsService,
    private allDoctorsService: AllDoctorsService,
    @Inject(MAT_DIALOG_DATA) public IncomeDetails: any) {
    this.IncomeForm = this.fb.group({
      PatientName: this.fb.control('', Validators.required),
      ServiceType: this.fb.control('', Validators.required),
      ServiceDate: this.fb.control('', Validators.required),
      AmountBilled: this.fb.control('', Validators.required),
      AmountPaid: this.fb.control('', Validators.required),
      PaymentMethod: this.fb.control('', Validators.required),
      InsuranceAmount: this.fb.control('', Validators.required),
      OutstandingAmount: this.fb.control('', Validators.required),
      PaymentStatus: this.fb.control('', Validators.required),
      InvoiceNumber: this.fb.control('', Validators.required),
      DoctorFee: this.fb.control('', Validators.required),
      DoctorName: this.fb.control('', Validators.required)
    });
    this.allPatientsService.GetAllPatients().subscribe({
      next: (res) => {
        this.PatientList = res
      }
    })
    this.allDoctorsService.GetAllDoctors().subscribe({
      next: (res) => {
        this.DoctorList = res
      }
    })
  }
}
