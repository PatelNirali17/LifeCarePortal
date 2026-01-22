import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-blood-stock-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './blood-stock-dialog.component.html',
  styleUrl: './blood-stock-dialog.component.scss'
})
export class BloodStockDialogComponent {
  BloodStockForm!: FormGroup;
  BloodTypeList = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  ComponentTypeList = ['Whole Blood', 'Platelets', 'Plasma', 'Red Blood Cells']
  ConditionQualityStatusList = ['Good', 'Hemolyzed', 'Clotted']
  DonationStatusList = ['Fresh', 'In-Use', 'Expired']


  constructor(public dialogRef: MatDialogRef<BloodStockDialogComponent>, private fb: NonNullableFormBuilder,
    @Inject(MAT_DIALOG_DATA) public BloodStockDetails: any) {
    this.BloodStockForm = this.fb.group({
      BloodProductID: this.fb.control('', Validators.required),
      BloodType: this.fb.control('', Validators.required),
      ComponentType: this.fb.control('', Validators.required),
      QuantityInStock: this.fb.control('', Validators.required),
      ExpiryDate: this.fb.control('', Validators.required),
      CollectionDate: this.fb.control('', Validators.required),
      StorageLocation: this.fb.control('', Validators.required),
      DonationStatus: this.fb.control('', Validators.required),
      BatchNumber: this.fb.control('', Validators.required),
      ConditionQualityStatus: this.fb.control('', Validators.required),
      TemperatureRange: this.fb.control('', Validators.required),
      DateLastUpdated: this.fb.control('', Validators.required)
    });
  }
}
