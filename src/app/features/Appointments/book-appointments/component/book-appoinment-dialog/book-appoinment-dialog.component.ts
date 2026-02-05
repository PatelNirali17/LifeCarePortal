import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllDoctorsService } from '../../../../doctors/all-doctors/all-doctors.service';

@Component({
  selector: 'app-book-appoinment-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './book-appoinment-dialog.component.html',
  styleUrl: './book-appoinment-dialog.component.scss'
})
export class BookAppoinmentDialogComponent {
  AppointmentForm!: FormGroup;
  DoctorList: any;
  constructor(public dialogRef: MatDialogRef<BookAppoinmentDialogComponent>, private fb: NonNullableFormBuilder, private allDoctorsService: AllDoctorsService,
    @Optional() @Inject(MAT_DIALOG_DATA) public AppointmentDetails: any) {
    this.AppointmentForm = this.fb.group({
      Name: this.fb.control('', Validators.required),
      Email: this.fb.control('', Validators.required),
      Gender: this.fb.control('', Validators.required),
      DateofBirth: this.fb.control('', Validators.required),
      Address: this.fb.control(''),
      AppointmentDate: this.fb.control(new Date(), Validators.required),
      AppointmentTime: this.fb.control(new Date(), Validators.required),
      Mobile: this.fb.control('', Validators.required),
      DoctorName: this.fb.control('', Validators.required),
      Injury: this.fb.control(''),
      AppointmentStatus: this.fb.control(''),
      VisitType: this.fb.control(''),
      PaymentStatus: this.fb.control(''),
      InsuranceProvider: this.fb.control(''),
      Notes: this.fb.control('')
    })
    this.allDoctorsService.GetAllDoctors().subscribe({
      next: (result: any) => {
        this.DoctorList = result
      },
    })
  }

}
