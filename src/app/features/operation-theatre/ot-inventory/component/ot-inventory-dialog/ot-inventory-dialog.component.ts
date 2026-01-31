import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ot-inventory-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './ot-inventory-dialog.component.html',
  styleUrl: './ot-inventory-dialog.component.scss'
})
export class OtInventoryDialogComponent {
  OtInventoryForm!: FormGroup;

  constructor(public dialogRef: MatDialogRef<OtInventoryDialogComponent>, private fb: NonNullableFormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public OtInventoryDetails: any) {
    this.OtInventoryForm = this.fb.group({
      ItemName: this.fb.control('', Validators.required),
      Category: this.fb.control('', Validators.required),
      Quantity: this.fb.control('', Validators.required),
      ExpiryDate: this.fb.control('', Validators.required),
      Status: this.fb.control('', Validators.required),
    })

  }
}
