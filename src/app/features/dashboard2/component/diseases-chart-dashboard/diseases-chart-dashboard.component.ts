import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-diseases-chart-dashboard',
  imports: [SharedModule],
  templateUrl: './diseases-chart-dashboard.component.html',
  styleUrl: './diseases-chart-dashboard.component.scss'
})
export class DiseasesChartDashboardComponent {
  chartOptions: any = {
    series: [44, 55, 13, 43, 22],
    chart: {
      type: 'donut',
      width: 400, height: 220
    },
    labels: ['Fever', 'Cholera', 'Typhoid', 'Infection', 'Malaria'],
    colors: ['#b9a80e', '#2e7d32', '#6A0572', '#FF6B6B', '#2196F3'],
    legend: { show: false },
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
