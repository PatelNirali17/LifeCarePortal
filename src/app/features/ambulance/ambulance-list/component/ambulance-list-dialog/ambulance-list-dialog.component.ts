import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedModule } from '../../../../../shared/shared.module';

@Component({
  selector: 'app-ambulance-list-dialog',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,SharedModule,FormsModule],
  templateUrl: './ambulance-list-dialog.component.html',
  styleUrl: './ambulance-list-dialog.component.scss'
})
export class AmbulanceListDialogComponent {
  ambulanceForm: FormGroup;
  vehicleTypes = ['Owned', 'Contractual'];
  details: any;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AmbulanceListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.details = data
    this.ambulanceForm = this.fb.group({
      VehicleNumber: ['', Validators.required],
      VehicleName: ['', Validators.required],
      YearMade: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
      DriverName: ['', Validators.required],
      DriverLicenseNumber: ['', Validators.required],
      DriverNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      VehicleType: ['', Validators.required]
    });

    if (data) {
      this.ambulanceForm.patchValue(data);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.ambulanceForm.valid) {
      this.dialogRef.close(this.ambulanceForm.value);
    }
  }
}
