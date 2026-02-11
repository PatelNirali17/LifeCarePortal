import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-room-status-dashboard',
  imports: [SharedModule],
  templateUrl: './room-status-dashboard.component.html',
  styleUrl: './room-status-dashboard.component.scss'
})
export class RoomStatusDashboardComponent {
  chartOptions: any = {
    series: [70, 30],
    chart: {
      type: 'donut',
      width: 400, height: 300
    },
    labels: ['Occupied', 'Available'],
    colors: ['#b9a80e', '#aaaaaa'],
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
    dataLabels: {
      enabled: false
    }
  };
}
