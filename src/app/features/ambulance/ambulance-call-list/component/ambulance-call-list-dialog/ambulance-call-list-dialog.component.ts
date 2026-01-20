import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AmbulanceCallListDialogComponent>,private ambulanceListService : AmbulanceListService,
    @Inject(MAT_DIALOG_DATA) public AmbulanceCallDetails: any) {
    this.AmbulanceCallForm = this.fb.group({
      CaseNumber: ['', Validators.required],
      PatientName: ['', Validators.required],
      PatientNumber: ['', [Validators.required]],
      Gender: ['', Validators.required],
      Date: ['', Validators.required],
      VehicleNumber: ['', [Validators.required]],
      PatientAddress: ['', Validators.required]
    });

    this.ambulanceListService.getAmbulanceList().subscribe({
      next:(result:any)=> {
        this.VehicleList = result
      },
    })


  }
}
