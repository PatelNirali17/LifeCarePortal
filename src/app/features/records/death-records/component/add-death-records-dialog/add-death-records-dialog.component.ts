import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../../../../shared/shared.module';

@Component({
  selector: 'app-add-death-records-dialog',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,SharedModule,FormsModule],
  templateUrl: './add-death-records-dialog.component.html',
  styleUrls: ['./add-death-records-dialog.component.scss']
})
export class AddDeathRecordsDialogComponent implements OnInit {
  deathRecordForm: FormGroup;

  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<AddDeathRecordsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.deathRecordForm = this.fb.group({
      case_number: ['', Validators.required],
      patient_name: ['', Validators.required],
      gender: ['', Validators.required],
      death_date: ['', Validators.required],
      guardian_name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
      notes: ['']
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.deathRecordForm.patchValue(this.data);
    }
  }

  onSubmit() {
    if (this.deathRecordForm.valid) {
      this.dialogRef.close(this.deathRecordForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}