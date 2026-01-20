import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedModule } from '../../../../../shared/shared.module';
import { AllPatientsService } from '../../../../patients/all-patients/all-patients.service';

@Component({
  selector: 'app-add-death-records-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SharedModule, FormsModule],
  templateUrl: './add-death-records-dialog.component.html',
  styleUrls: ['./add-death-records-dialog.component.scss']
})
export class AddDeathRecordsDialogComponent implements OnInit {
  DeathRecordForm: FormGroup;
  PatientsList: any;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddDeathRecordsDialogComponent>, private allPatientsService: AllPatientsService,
    @Inject(MAT_DIALOG_DATA) public DeathRecordDetails: any) {
    this.DeathRecordForm = this.fb.group({
      case_number: ['', Validators.required],
      patient_name: ['', Validators.required],
      gender: ['', Validators.required],
      death_date: ['', Validators.required],
      guardian_name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
      notes: ['']
    });
    this.allPatientsService.GetAllPatients().subscribe({
      next: (result: any) => {
        this.PatientsList = result
      },
    })
  }

  ngOnInit(): void {
    if (this.DeathRecordDetails) {
      this.DeathRecordForm.patchValue(this.DeathRecordDetails);
    }
  }

  onSubmit() {
    if (this.DeathRecordForm.valid) {
      this.dialogRef.close(this.DeathRecordForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}