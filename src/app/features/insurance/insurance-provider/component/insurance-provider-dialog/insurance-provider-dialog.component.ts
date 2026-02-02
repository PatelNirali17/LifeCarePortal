import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-insurance-provider-dialog',
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './insurance-provider-dialog.component.html',
  styleUrl: './insurance-provider-dialog.component.scss'
})
export class InsuranceProviderDialogComponent {
  InsuranceProviderForm!: FormGroup;

  constructor(public dialogRef: MatDialogRef<InsuranceProviderDialogComponent>, private fb: NonNullableFormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public InsuranceProviderDetails: any) {
    this.InsuranceProviderForm = this.fb.group({
      providerName: this.fb.control('', Validators.required),
      contactPhone: this.fb.control('', Validators.required),
      contactEmail: this.fb.control('', Validators.required),
      address: this.fb.control('', Validators.required),
      websiteUrl: this.fb.control('', Validators.required),
      customerSupportNumber: this.fb.control('', Validators.required),
      paymentTerms: this.fb.control('', Validators.required),
      contractStartDate: this.fb.control('', Validators.required),
      contractEndDate: this.fb.control('', Validators.required),
      reimbursementRate: this.fb.control('', Validators.required),
      coverageTypes: this.fb.control('', Validators.required),
      status: this.fb.control('', Validators.required),
      contractNotes: this.fb.control('', Validators.required)
    })

  }

}
