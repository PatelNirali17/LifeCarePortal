import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { DoctorDetailsService } from '../../doctor-details.service';

@Component({
  selector: 'app-doctor-details',
  imports: [SharedModule, CommonModule],
  templateUrl: './doctor-details.component.html',
  styleUrl: './doctor-details.component.scss'
})
export class DoctorDetailsComponent {
  doctors: any;
  constructor(private doctorDetailsService: DoctorDetailsService) {
    setTimeout(() => {
      this.GetAllAssignDepartment()
    }, 1000);
  }

  GetAllAssignDepartment() {
    this.doctorDetailsService.GetAllDoctorDetails().subscribe({
      next: (result: any) => {
        this.doctors = result;
      },
    })
  }

}
