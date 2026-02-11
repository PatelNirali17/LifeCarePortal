import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-all-doctor-status-dashboard',
  imports: [SharedModule],
  templateUrl: './all-doctor-status-dashboard.component.html',
  styleUrl: './all-doctor-status-dashboard.component.scss'
})
export class AllDoctorStatusDashboardComponent {
  doctors = [
    { name: 'Dr. Jay Soni', qualifications: '(MBBS,MD)', status: 'Available', image: 'user/default-user.jpg' },
    { name: 'Dr. Sarah Smith', qualifications: '(BDS,MDS)', status: 'Absent', image: 'user/default-user.jpg' },
    { name: 'Dr. Megha Trivedi', qualifications: '(BHMS)', status: 'Available', image: 'user/default-user.jpg' },
    { name: 'Dr. John Deo', qualifications: '(MBBS,MS)', status: 'Available', image: 'user/default-user.jpg' },
    { name: 'Dr. Jacob Ryan', qualifications: '(MBBS,MD)', status: 'Absent', image: 'user/default-user.jpg' },
    { name: 'Dr. Linda Carter', qualifications: '(MBBS, DNB)', status: 'Available', image: 'user/default-user.jpg' },
    { name: 'Dr. Rajesh Kumar', qualifications: '(MD, FRCP)', status: 'Absent', image: 'user/default-user.jpg' },
    { name: 'Dr. Nina Patel', qualifications: '(BDS)', status: 'Available', image: 'user/default-user.jpg' },
    { name: 'Dr. Michael Lee', qualifications: '(MBBS, MD)', status: 'Available', image: 'user/default-user.jpg' }
  ];

}
