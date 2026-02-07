import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctor-appointments-dashboard',
  imports: [SharedModule, CommonModule],
  templateUrl: './doctor-appointments-dashboard.component.html',
  styleUrl: './doctor-appointments-dashboard.component.scss'
})
export class DoctorAppointmentsDashboardComponent {

  chartOptions: any = {
    series: [28, 24, 4],
    chart: {
      type: 'donut',
      width: 300, height: 217
    },
    labels: ['Scheduled', 'Completed', 'Cancelled'],
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
