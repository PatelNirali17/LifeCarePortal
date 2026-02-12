import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-patients-group-dashboard',
  imports: [SharedModule],
  templateUrl: './patients-group-dashboard.component.html',
  styleUrl: './patients-group-dashboard.component.scss'
})
export class PatientsGroupDashboardComponent {
  patientGroups = [
    { initial: 'C', name: 'Cholesterol', count: 5, color: '#FF6384' },
    { initial: 'D', name: 'Diabetic', count: 14, color: '#36A2EB' },
    { initial: 'L', name: 'Low Blood Pressure', count: 10, color: '#FFCE56' },
    { initial: 'H', name: 'Hypertension', count: 21, color: '#4BC0C0' },
    { initial: 'M', name: 'Malaria', count: 11, color: '#9966FF' },
    { initial: 'D', name: 'Dental Problem', count: 17, color: '#FF9F40' },
    { initial: 'A', name: 'Asthma', count: 8, color: '#C9CBCF' },
    { initial: 'R', name: 'Rheumatoid Arthritis', count: 9, color: '#7C4DFF' },
    { initial: 'S', name: 'Stroke', count: 6, color: '#E84393' }
  ];
}
