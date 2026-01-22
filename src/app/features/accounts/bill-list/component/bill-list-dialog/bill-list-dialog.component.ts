import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllPatientsService } from '../../../../patients/all-patients/all-patients.service';
import { AllDoctorsService } from '../../../../doctors/all-doctors/all-doctors.service';

@Component({
  selector: 'app-bill-list-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './bill-list-dialog.component.html',
  styleUrl: './bill-list-dialog.component.scss'
})
export class BillListDialogComponent {
  BillForm!: FormGroup;
  PatientList: any;
  DoctorList: any;

  constructor(public dialogRef: MatDialogRef<BillListDialogComponent>, private fb: NonNullableFormBuilder, private allPatientsService: AllPatientsService,
    private allDoctorsService: AllDoctorsService,
    @Inject(MAT_DIALOG_DATA) public BillDetails: any) {
    this.BillForm = this.fb.group({
      PatientName: this.fb.control('', Validators.required),
      AdmissionID: this.fb.control('', Validators.required),
      DoctorName: this.fb.control('', Validators.required),
      Status: this.fb.control('', Validators.required),
      AdmissionDate: this.fb.control('', Validators.required),
      Tax: this.fb.control('', Validators.required),
      Discount: this.fb.control('', Validators.required),
      TotalAmount: this.fb.control('', Validators.required),
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
