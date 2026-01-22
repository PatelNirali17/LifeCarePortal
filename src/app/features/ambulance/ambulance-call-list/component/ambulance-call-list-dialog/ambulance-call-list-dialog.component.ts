import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedModule } from '../../../../../shared/shared.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AmbulanceListService } from '../../../ambulance-list/ambulance-list.service';

@Component({
  selector: 'app-ambulance-call-list-dialog',
  imports: [CommonModule, ReactiveFormsModule, SharedModule, FormsModule],
  templateUrl: './ambulance-call-list-dialog.component.html',
  styleUrl: './ambulance-call-list-dialog.component.scss'
})
export class AmbulanceCallListDialogComponent {
  AmbulanceCallForm!: FormGroup;
  details: any;
  VehicleList: any;

  constructor(private fb: NonNullableFormBuilder, public dialogRef: MatDialogRef<AmbulanceCallListDialogComponent>,private ambulanceListService : AmbulanceListService,
    @Inject(MAT_DIALOG_DATA) public AmbulanceCallDetails: any) {
    this.AmbulanceCallForm = this.fb.group({
      CaseNumber: this.fb.control('', Validators.required),
      PatientName: this.fb.control('', Validators.required),
      PatientNumber: this.fb.control('', Validators.required),
      Gender: this.fb.control('', Validators.required),
      Date: this.fb.control('', Validators.required),
      VehicleNumber: this.fb.control('', Validators.required),
      PatientAddress: this.fb.control('', Validators.required)
    });

    this.ambulanceListService.getAmbulanceList().subscribe({
      next:(result:any)=> {
        this.VehicleList = result
      },
    })


  }
}
