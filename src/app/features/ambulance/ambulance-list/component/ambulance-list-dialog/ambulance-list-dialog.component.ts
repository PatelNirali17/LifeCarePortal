import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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

  constructor(private fb: NonNullableFormBuilder,public dialogRef: MatDialogRef<AmbulanceListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.details = data
    this.ambulanceForm = this.fb.group({
      VehicleNumber: this.fb.control('', Validators.required),
      VehicleName: this.fb.control('', Validators.required),
      YearMade: this.fb.control('', Validators.required),
      DriverName: this.fb.control('', Validators.required),
      DriverLicenseNumber: this.fb.control('', Validators.required),
      DriverNumber: this.fb.control('', Validators.required),
      VehicleType: this.fb.control('', Validators.required)
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
