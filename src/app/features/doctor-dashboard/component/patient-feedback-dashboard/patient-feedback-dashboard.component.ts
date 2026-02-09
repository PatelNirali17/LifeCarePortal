import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient-feedback-dashboard',
  imports: [SharedModule, CommonModule],
  templateUrl: './patient-feedback-dashboard.component.html',
  styleUrl: './patient-feedback-dashboard.component.scss'
})
export class PatientFeedbackDashboardComponent {
  rating = 4.8;
  chartOptions: any = {
    series: [68, 24, 8],
    chart: {
      type: 'donut',
      width: 300, height: 217
    },
    labels: ['Excellent', 'Good', 'Poor'],
    colors: ['#6A0572', '#D4AF37', '#FF6B6B'],
    legend: { position: 'bottom' },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: { width: 300 },
          legend: { position: 'bottom' }
        }
      }
    ],
  };
}
