import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllDoctorsService } from '../../../../doctors/all-doctors/all-doctors.service';
import { AllPatientsService } from '../../../../patients/all-patients/all-patients.service';

@Component({
  selector: 'app-patient-documents-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './patient-documents-dialog.component.html',
  styleUrl: './patient-documents-dialog.component.scss'
})
export class PatientDocumentsDialogComponent {
  PatientDocumentsForm!: FormGroup;
  PatientList: any;
  DoctorList: any;
  selectedDocumentFile: File | null = null;

  constructor(public dialogRef: MatDialogRef<PatientDocumentsDialogComponent>, private fb: NonNullableFormBuilder, private allDoctorsService: AllDoctorsService,
    private allPatientService: AllPatientsService,
    @Optional() @Inject(MAT_DIALOG_DATA) public PatientDocumentsDetails: any) {
    this.PatientDocumentsForm = this.fb.group({
      PatientName: this.fb.control('', Validators.required),
      DocumentType: this.fb.control('', Validators.required),
      UploadedBy: this.fb.control('', Validators.required),
      UploadDate: this.fb.control('', Validators.required),
      Status: this.fb.control('', Validators.required)
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

  onDocumentFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.selectedDocumentFile = input.files[0];
    }
  }
}
