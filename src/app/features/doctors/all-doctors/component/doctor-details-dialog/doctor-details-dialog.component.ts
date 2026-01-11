import { Component, Inject, Optional } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-doctor-details-dialog',
  imports: [SharedModule,CommonModule],
  templateUrl: './doctor-details-dialog.component.html',
  styleUrl: './doctor-details-dialog.component.scss'
})
export class DoctorDetailsDialogComponent {

   constructor(public dialogRef: MatDialogRef<DoctorDetailsDialogComponent>, 
    @Optional() @Inject(MAT_DIALOG_DATA) public DoctorDetails: any) {
  }
}
