import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { PatientDetailsService } from '../../patient-details.service';


@Component({
  selector: 'app-patient-details',
  imports: [SharedModule, CommonModule],
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {
  patientRecords: any[] = [];

  constructor(private patientDetailsService: PatientDetailsService) {
    setTimeout(() => {
      this.GetAllPatientsRecords()
    }, 1000);
  }

  ngOnInit(): void {
  }

  GetAllPatientsRecords() {
    this.patientDetailsService.GetAllPatientDetails().subscribe({
      next: (result: any) => {
        this.patientRecords = result;
      },
    })
  }


}