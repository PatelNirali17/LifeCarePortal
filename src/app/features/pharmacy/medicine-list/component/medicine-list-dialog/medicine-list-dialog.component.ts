import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-medicine-list-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './medicine-list-dialog.component.html',
  styleUrl: './medicine-list-dialog.component.scss'
})
export class MedicineListDialogComponent {
  MedicineForm!: FormGroup;

  constructor(public dialogRef: MatDialogRef<MedicineListDialogComponent>, private fb: NonNullableFormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public MedicineFDetails: any) {
    this.MedicineForm = this.fb.group({
      MedicineName: this.fb.control('', Validators.required),
      Category: this.fb.control('', Validators.required),
      Company: this.fb.control('', Validators.required),
      PurchaseDate: this.fb.control('', Validators.required),
      Price: this.fb.control('', Validators.required),
      ExpiryDate: this.fb.control('', Validators.required),
      Stock: this.fb.control('', Validators.required),
    })

  }
}
